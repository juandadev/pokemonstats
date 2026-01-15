import React from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  GameVersion,
  GenericPropertyDetails,
  Items,
  PokemonTypes,
} from '@/types/pokemon.types';
import { CircleIcon } from 'lucide-react';
import { EffectivenessMode } from '@/types';
import {
  EVOLUTION_DETAILS,
  getLocalizedEvolutionDetails,
} from '@/common/constants/evolutions';
import {
  EvolutionDetailDisplay,
  EvolutionDetails,
} from '@/types/evolutions.types';
import { Species } from '@/types/species.types';
import { TYPE_ICONS, TYPE_LABELS } from '@/common/constants/pokemonTypes';
import { WEAKNESS_CHART } from '@/common/constants/charts';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getEvolutionDetails = (
  details?: EvolutionDetails[] | null
): Partial<EvolutionDetails>[] => {
  if (!details || details.length === 0) {
    return [
      {
        trigger: {
          name: 'base-form',
          url: '',
        },
      },
    ];
  }

  const evolutionDetails: Partial<EvolutionDetails>[] = [];

  for (let i = 0; i < details.length; i++) {
    const evolutionEntries = Object.entries(details[i]);
    const newEvolutionDetailsObject: Partial<EvolutionDetails> = {};

    for (const [key, value] of evolutionEntries) {
      if ((key === 'relative_physical_stats' && value !== null) || value) {
        // @ts-expect-error Forgive me I'm too lazy to correctly type this
        newEvolutionDetailsObject[key] = value;
      }
    }

    evolutionDetails.push(newEvolutionDetailsObject);
  }

  return evolutionDetails;
};

export function buildAdditionalDetailsList(
  detail: Partial<EvolutionDetails>,
  t?: (key: string, fallback: string) => string
): EvolutionDetailDisplay[] {
  const additionalDetailsList = [];

  for (const [key, value] of Object.entries(detail)) {
    if (key === 'trigger') continue;

    const detailInfo = t
      ? getLocalizedEvolutionDetails(
          value as
            | string
            | number
            | boolean
            | Species
            | GenericPropertyDetails
            | GenericPropertyDetails<Items>,
          t
        )[key as keyof EvolutionDetails]
      : EVOLUTION_DETAILS(
          value as
            | string
            | number
            | boolean
            | Species
            | GenericPropertyDetails
            | GenericPropertyDetails<Items>
        )[key as keyof EvolutionDetails];
    additionalDetailsList.push(detailInfo);
  }

  return additionalDetailsList;
}

export const getTypeIcon = (type: PokemonTypes) => {
  const Icon = TYPE_ICONS[type] || CircleIcon;
  const TypeIcon = (props: React.ComponentProps<'svg'>) => <Icon {...props} />;
  TypeIcon.displayName = 'TypeIcon';

  return TypeIcon;
};

export interface EffectivenessList {
  '4x': string[];
  '2x': string[];
  '0.5': string[];
  '0.25': string[];
  0: string[];
}

export const getEffectivenessList = (
  typeIndexes: number[],
  mode: EffectivenessMode = 'offensive'
): EffectivenessList => {
  const INITIAL_EFFECTIVENESS: EffectivenessList = {
    '4x': [],
    '2x': [],
    0.5: [],
    0.25: [],
    0: [],
  };

  if (!typeIndexes.length) return INITIAL_EFFECTIVENESS;

  const effectiveness: Record<EffectivenessMode, EffectivenessList> = {
    offensive: calculateAttackerEffectiveness(typeIndexes),
    defensive: calculateDefenderEffectiveness(typeIndexes),
  };

  return effectiveness[mode] || INITIAL_EFFECTIVENESS;
};

export const calculateAttackerEffectiveness = (
  typeIndexes: number[]
): EffectivenessList => {
  const effectiveness: EffectivenessList = {
    '4x': [],
    '2x': [],
    0.5: [],
    0.25: [],
    0: [],
  };

  const [primaryRow, secondaryRow = createNeutralRow()] = typeIndexes.map(
    (index) => WEAKNESS_CHART[index]
  );

  for (let i = 1; i < primaryRow.length; i++) {
    const typeName = Object.keys(TYPE_LABELS)[i - 1];

    const type1 = primaryRow[i];
    const type2 = secondaryRow[i];
    const combined = type1 * type2;

    if (combined === 4) {
      effectiveness['4x'].push(typeName);
    } else if (combined === 2) {
      effectiveness['2x'].push(typeName);
    } else if (combined === 0.25) {
      effectiveness['0.25'].push(typeName);
    } else if (combined === 0.5) {
      effectiveness['0.5'].push(typeName);
    } else if (combined === 0) {
      effectiveness['0'].push(typeName);
    }
  }

  return effectiveness;
};

const calculateDefenderEffectiveness = (
  typeIndexes: number[]
): EffectivenessList => {
  const effectiveness: EffectivenessList = {
    '4x': [],
    '2x': [],
    0.5: [],
    '0.25': [],
    '0': [],
  };

  for (let i = 1; i <= 18; i++) {
    const typeName = Object.keys(TYPE_LABELS)[i - 1];

    const attackerRow = WEAKNESS_CHART[i];
    const type1Effectiveness = attackerRow[typeIndexes[0]];
    const type2Effectiveness = attackerRow[typeIndexes[1]] ?? 1;
    const calculateWeakness = type1Effectiveness * type2Effectiveness;

    if (calculateWeakness === 4) {
      effectiveness['4x'].push(typeName);
    } else if (calculateWeakness === 2) {
      effectiveness['2x'].push(typeName);
    } else if (calculateWeakness === 0.25) {
      effectiveness['0.25'].push(typeName);
    } else if (calculateWeakness === 0.5) {
      effectiveness['0.5'].push(typeName);
    } else if (calculateWeakness === 0) {
      effectiveness['0'].push(typeName);
    }
  }

  return effectiveness;
};

export const createNeutralRow = (): number[] => {
  const typeCount = Object.keys(TYPE_LABELS).length + 1;

  return new Array(typeCount).fill(1);
};

export const formatStatName = (statName: string) => {
  const statMap: { [key: string]: string } = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Attack',
    'special-defense': 'Sp. Defense',
    speed: 'Speed',
  };
  return statMap[statName] || statName;
};

export const getStatColor = (statName: string) => {
  const colorMap: { [key: string]: string } = {
    hp: '#FF5959',
    attack: '#F5AC78',
    defense: '#FAE078',
    'special-attack': '#9DB7F5',
    'special-defense': '#A7DB8D',
    speed: '#FA92B2',
  };
  return colorMap[statName] || '#94A3B8';
};

const CUSTOM_GAME_NAMES: Partial<Record<GameVersion, string>> = {
  'black-2-white-2': 'Black 2 & White 2',
  'omega-ruby-alpha-sapphire': 'Omega Ruby & Alpha Sapphire',
  'ultra-sun-ultra-moon': 'Ultra Sun & Ultra Moon',
  'brilliant-diamond-and-shining-pearl': 'Brilliant Diamond & Shining Pearl',
  'lets-go-pikachu-lets-go-eevee': "Let's Go Pikachu & Let's Go Eevee",
  'legends-arceus': 'Legends: Arceus',
};

export function formatGameVersion(version: GameVersion): string {
  if (CUSTOM_GAME_NAMES[version]) return CUSTOM_GAME_NAMES[version];

  let formatted = version.replace(/-/g, ' ');

  if (/(\b\w+\b) (\b\w+\b)/.test(formatted)) {
    formatted = formatted.replace(/\s/g, ' & ');
  }

  return formatted;
}

export function keywordsForPokemon(
  name: string,
  types: PokemonTypes[],
  id?: number
): string[] {
  const base: string[] = [
    name,
    `${name} weaknesses`,
    `${name} type`,
    `${name} evolution`,
    `${name} counters`,
    'pokemon weaknesses',
    'pokemon type chart',
    'pokemon evolutions',
    'pokemon',
    'stats',
    'type chart',
    'type matchup',
    'weaknesses',
    'evolutions',
    'evolution chain',
    'moves',
    'abilities',
    'pokedex',
  ];

  const typeKw = types.flatMap((t) => [
    `${name} ${t} type`,
    `${t} type weaknesses`,
    `${t} type effectiveness`,
  ]);

  const dexKw =
    typeof id === 'number' ? [`pokedex ${id}`, `${name} pokedex ${id}`] : [];

  return [...new Set([...base, ...typeKw, ...dexKw])];
}

export function titleCase(input: string): string {
  return input
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

/**
 * Check if a string matches the first X characters of another string.
 *
 * @param target - The string to check against (the full string)
 * @param candidate - The string to test (the partial match)
 * @param length - Number of initial characters to compare
 * @returns true if the candidate matches the first X characters of the target
 */
export function matchesInitialChars(
  target: string,
  candidate: string,
  length: number
): boolean {
  if (length <= 0) return false;
  if (candidate.length < length || target.length < length) return false;

  return (
    target.slice(0, length).toLowerCase() ===
    candidate.slice(0, length).toLowerCase()
  );
}
