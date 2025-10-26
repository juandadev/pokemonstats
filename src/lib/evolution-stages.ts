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

  const stageList = stages.map((stage) =>
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

  const lastStage = stageList[stageList.length - 1];
  const megaForms: EvolutionCardData[] = [];

  for (const { slug } of lastStage) {
    const possibleMegas = [`${slug}-mega`, `${slug}-mega-x`, `${slug}-mega-y`];

    for (const megaSlug of possibleMegas) {
      const megaData = await getEvolutionDetails(megaSlug);
      if (megaData) {
        megaForms.push({
          slug: megaSlug,
          displayName: getPokemonDisplayName(megaSlug),
          spriteUrl: pickSprite(megaData.sprites),
          evolutionDetails: [
            {
              trigger: {
                name: 'mega-evolution',
                url: '',
              },
              item: null,
              gender: null,
              held_item: { name: 'Mega Stone', url: '' },
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: null,
              min_level: null,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              turn_upside_down: false,
            },
          ],
        });
      }
    }
  }

  if (megaForms.length > 0) {
    stageList.push(megaForms);
  }

  return stageList;
}
