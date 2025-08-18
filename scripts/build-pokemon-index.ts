import {
  PokemonData,
  PokemonIndexItem,
  PokemonListResponse,
  Sprites,
} from '@/types/pokemon.types';
import { getPokemonDisplayName } from '@/lib/pokemonDisplayName';
import { writeFile } from 'node:fs/promises';

const BASE = 'https://pokeapi.co/api/v2';
const OUTPUT_FILE = 'src/data/pokemon-index.json';
const CONCURRENCY = Number(process.env.POKEAPI_CONCURRENCY ?? 3);
const MS_PER_REQUEST = Number(process.env.POKEAPI_MS_PER_REQUEST ?? 300);
const MAX_RETRIES = Number(process.env.POKEAPI_MAX_RETRIES ?? 3);
const BASE_BACKOFF_MS = Number(process.env.POKEAPI_BASE_BACKOFF_MS ?? 400);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Global pacer: spaces out starts so across the whole process
 * we respect ~1 request every MS_PER_REQUEST.
 * @param intervalMs
 */
function createPacer(intervalMs: number) {
  let next = 0;

  return async function pace() {
    const now = Date.now();
    const wait = Math.max(0, next - now);

    next = Math.max(now, next) + intervalMs;

    if (wait > 0) await sleep(wait);
  };
}

const pace = createPacer(MS_PER_REQUEST);

/**
 * Jittered exponential backoff wrapper
 * @param fn
 */
async function withBackoff<T>(fn: () => Promise<T>): Promise<T> {
  let lastErr: unknown;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;

      const jitter = Math.random() * 150;
      const delay = BASE_BACKOFF_MS * 2 ** attempt + jitter;

      await sleep(delay);
    }
  }
  throw lastErr;
}

/**
 * Concurrency limiter
 * @param concurrency
 */
function pLimit(concurrency: number) {
  let active = 0;
  const queue: Array<() => void> = [];

  const next = () => {
    active--;

    if (queue.length) queue.shift()?.();
  };

  return async <R>(fn: () => Promise<R>): Promise<R> => {
    if (active >= concurrency) {
      await new Promise<void>((res) => queue.push(res));
    }

    active++;

    try {
      return await fn();
    } finally {
      next();
    }
  };
}

const limit = pLimit(CONCURRENCY);

/**
 * Selects the small “icon” mini sprites when present.
 * @param sprites
 */
function pickIconSprite(sprites: Sprites): string | null {
  const spriteVersions = sprites.versions;

  const gen8Icon =
    spriteVersions?.['generation-viii']?.icons?.front_default ?? null;
  if (gen8Icon) return gen8Icon;

  const gen7Icon =
    spriteVersions?.['generation-vii']?.icons?.front_default ?? null;
  if (gen7Icon) return gen7Icon;

  const gen5Anim =
    spriteVersions?.['generation-v']?.['black-white']?.animated
      ?.front_default ?? null;
  if (gen5Anim) return gen5Anim;

  return sprites.front_default ?? null;
}

async function fetchAllPokemonSlugs(): Promise<string[]> {
  await pace();

  const res = await withBackoff(async () => {
    return fetch(`${BASE}/pokemon?limit=2000&offset=0`, { cache: 'no-store' });
  });

  if (!res.ok) throw new Error(`Failed list: ${res.status}`);

  const data = (await res.json()) as PokemonListResponse;

  return data.results.map((result) => result.name);
}

async function fetchPokemon(slug: string): Promise<PokemonData | null> {
  await pace();

  const res = await withBackoff(async () => {
    return fetch(`${BASE}/pokemon/${slug}`, { cache: 'no-store' });
  });

  if (!res.ok) return null;

  return (await res.json()) as PokemonData;
}

async function buildIndex() {
  console.time('build-pokemon-index');

  const slugs = await fetchAllPokemonSlugs();
  console.log(`Total entries (forms included): ${slugs.length}`);

  const items: PokemonIndexItem[] = [];

  await Promise.all(
    slugs.map((slug) =>
      limit(async () => {
        const pokemon = await fetchPokemon(slug);

        if (!pokemon) return;

        const label = getPokemonDisplayName(pokemon.name);
        const sprite = pickIconSprite(pokemon.sprites);

        items.push({ label, slug: pokemon.name, sprite });
      })
    )
  );

  items.sort((a, b) => a.label.localeCompare(b.label, 'en'));

  await writeFile(OUTPUT_FILE, JSON.stringify(items, null, 2), 'utf8');

  console.log(`Wrote ${items.length} entries → ${OUTPUT_FILE}`);
  console.timeEnd('build-pokemon-index');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildIndex().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
