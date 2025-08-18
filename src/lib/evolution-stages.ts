import {
  Chain,
  EvolutionCardData,
  EvolutionChain,
  EvolutionDetails,
} from '@/types/evolutions.types';
import { getEvolutionDetails } from '@/lib/pokeapi';
import { PokemonData, Sprites } from '@/types/pokemon.types';
import { getPokemonDisplayName } from '@/lib/pokemonDisplayName';

export type EvolutionEntry = {
  slug: string;
  evolutionDetails: EvolutionDetails[] | null;
};

/**
 * Build stages from the root chain using a breadth-first traversal
 * @param chain
 */
export function buildEvolutionStages(chain: Chain): EvolutionEntry[][] {
  type QItem = {
    node: Chain;
    level: number;
    details: EvolutionDetails[] | null;
  };

  const levels = new Map<number, EvolutionEntry[]>();
  const q: QItem[] = [{ node: chain, level: 0, details: null }];

  while (q.length) {
    const { node, level, details } = q.shift() as QItem;

    const slug = node.species.name;
    const entry: EvolutionEntry = {
      slug,
      evolutionDetails: details,
    };

    const arr = levels.get(level) ?? [];

    arr.push(entry);
    levels.set(level, arr);

    // Push children; attach the child's raw details from the edge
    for (const child of node.evolves_to) {
      q.push({
        node: child,
        level: level + 1,
        details: child.evolution_details ?? null,
      });
    }
  }

  // Normalize order and de-dup just in case
  const maxLevel = Math.max(...levels.keys());
  const result: EvolutionEntry[][] = [];

  for (let i = 0; i <= maxLevel; i++) {
    const stage = levels.get(i) ?? [];
    const seen = new Set<string>();

    result.push(
      stage.filter((e) => (seen.has(e.slug) ? false : (seen.add(e.slug), true)))
    );
  }

  return result;
}

/**
 * Prefer official-artwork, fallback to front_default
 * @param sprites
 */
export function pickSprite(sprites: Sprites): string | null {
  return (
    sprites.other?.['official-artwork']?.front_default ??
    sprites.front_default ??
    null
  );
}

export async function buildEvolutionStageList(
  evolution: EvolutionChain
): Promise<EvolutionCardData[][]> {
  const stages: EvolutionEntry[][] = buildEvolutionStages(evolution.chain);
  const unique = Array.from(new Set(stages.flat().map((e) => e.slug)));
  const fetched = await Promise.all(
    unique.map((name) => getEvolutionDetails(name))
  );
  const bySlug = new Map<string, PokemonData | null>(
    unique.map((s, i) => [s, fetched[i]])
  );

  return stages.map((stage) =>
    stage.map(({ slug, evolutionDetails }) => {
      const mini = bySlug.get(slug) ?? null;

      return {
        slug,
        displayName: getPokemonDisplayName(slug),
        spriteUrl: mini ? pickSprite(mini.sprites) : null,
        evolutionDetails,
      };
    })
  );
}
