import React from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Chain,
  EvolutionDetail,
  PokemonEvolutionType,
  PokemonTypes,
} from '@/types/Pokemon.type';
import { TYPE_ICONS, TYPE_LABELS, WEAKNESS_CHART } from '@/common/constants';
import { CircleIcon } from 'lucide-react';
import { EffectivenessMode } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPokeApiName(name: string) {
  if (!name.startsWith('Mega ')) return name.toLowerCase().replace(/\s+/g, '-');

  const parts = name.split(' ');
  const base = parts.slice(1).join('-').toLowerCase(); // everything after "Mega"
  return `${base}-mega`;
}

export const getEvolutionDetails = (
  details?: EvolutionDetail[]
): Partial<EvolutionDetail>[] => {
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

  const evolutionDetails: Partial<EvolutionDetail>[] = [];

  for (let i = 0; i < details.length; i++) {
    const evolutionEntries = Object.entries(details[i]);
    const newEvolutionDetailsObject: Partial<EvolutionDetail> = {};

    for (const [key, value] of evolutionEntries) {
      if (value) {
        // @ts-expect-error Forgive me I'm too lazy to correctly type this
        newEvolutionDetailsObject[key] = value;
      }
    }

    evolutionDetails.push(newEvolutionDetailsObject);
  }

  return evolutionDetails;
};

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

export function formatDisplayCount(count: number): string {
  if (count < 10_000) {
    return count.toLocaleString(); // adds commas: 1,234
  }

  if (count >= 1_000_000_000) {
    return `${(count / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`;
  }

  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  }

  return `${(count / 1_000).toFixed(1).replace(/\.0$/, '')}k`;
}

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

export const buildEvolutionChain = (
  pokemonChain: Chain
): PokemonEvolutionType[] => {
  const evolutions: PokemonEvolutionType[] = [];

  if (pokemonChain) {
    const { species, evolves_to, evolution_details } = pokemonChain;

    evolutions.push({
      name: species.name,
      evolutionDetails: evolution_details,
    });

    if (evolves_to.length) {
      evolves_to.forEach((evolve) => {
        const subEvolutions = buildEvolutionChain(evolve);
        evolutions.push(...subEvolutions);
      });
    }
  }

  return evolutions;
};
