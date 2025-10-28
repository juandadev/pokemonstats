import {
  Chain,
  EvolutionCardData,
  EvolutionChain,
  EvolutionDetails,
} from '@/types/evolutions.types';
import { getEvolutionDetails } from '@/lib/pokeapi';
import { PokemonData, Sprites } from '@/types/pokemon.types';
import { getPokemonDisplayName } from '@/lib/pokemonDisplayName';
import { matchesInitialChars } from '@/lib/utils';
import { GMAX_LIST, ITEMS_LIST, MEGA_EVOS_LIST } from '@/common/constants';

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

const emptyEvoDetailObj: EvolutionCardData = {
  slug: '',
  displayName: '',
  spriteUrl: null,
  evolutionDetails: [
    {
      gender: null,
      held_item: null,
      item: null,
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
      trigger: null,
      turn_upside_down: false,
    },
  ],
};

async function insertMegaEvolution(
  stageList: EvolutionCardData[][]
): Promise<boolean> {
  const lastStage: EvolutionCardData[] = stageList[stageList.length - 1];
  const megaForms: EvolutionCardData[] = [];

  for (const { slug } of lastStage) {
    const isMegaEvolution = MEGA_EVOS_LIST.has(slug);

    if (!isMegaEvolution) {
      continue;
    }

    for (const megaEvo of MEGA_EVOS_LIST.get(slug)!) {
      const megaSlug = megaEvo.slug;
      const megaData = await getEvolutionDetails(megaSlug);

      if (!megaData) continue;

      const megaStone = ITEMS_LIST.find((item) => {
        const isMatch =
          matchesInitialChars(item.name, megaData.name, 4) &&
          item.name.includes('ite');

        if ((megaSlug.includes('-x') || megaSlug.includes('-y')) && isMatch) {
          return item.name.includes('-x')
            ? megaSlug.endsWith('-x')
            : megaSlug.endsWith('-y');
        }

        return isMatch;
      });

      megaForms.push({
        ...emptyEvoDetailObj,
        slug: megaSlug,
        displayName: getPokemonDisplayName(megaSlug),
        spriteUrl: pickSprite(megaData.sprites),
        evolutionDetails: [
          {
            ...emptyEvoDetailObj.evolutionDetails![0],
            trigger: {
              name: 'mega-evolution',
              url: '',
            },
            held_item: megaStone
              ? {
                  name: megaStone.name,
                  url: megaStone.sprites.default || '',
                }
              : null,
          },
        ],
      });
    }
  }

  if (megaForms.length > 0) {
    stageList.push(megaForms);
  }

  return megaForms.length > 0;
}

async function insertGmaxEvolution(
  stageList: EvolutionCardData[][],
  hasMega: boolean
) {
  const lastStage: EvolutionCardData =
    stageList[stageList.length - (hasMega ? 2 : 1)][0];
  const isGmax = GMAX_LIST.has(lastStage.slug);

  if (isGmax) {
    const gmaxSlug = GMAX_LIST.get(lastStage.slug)!.slug;
    const gmaxData = await getEvolutionDetails(gmaxSlug);

    if (!gmaxData) return;

    stageList.push([
      {
        ...emptyEvoDetailObj,
        slug: gmaxSlug,
        displayName: getPokemonDisplayName(gmaxSlug),
        spriteUrl: pickSprite(gmaxData.sprites),
        evolutionDetails: [
          {
            ...emptyEvoDetailObj.evolutionDetails![0],
            trigger: {
              name: 'gmax',
              url: '',
            },
            item: {
              name: ITEMS_LIST[1089].name,
              url: ITEMS_LIST[1089].sprites.default || '',
            },
          },
        ],
      },
    ]);
  }
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

  const stageList: EvolutionCardData[][] = stages.map((stage) =>
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

  const hasMega = await insertMegaEvolution(stageList);
  await insertGmaxEvolution(stageList, hasMega);

  return stageList;
}
