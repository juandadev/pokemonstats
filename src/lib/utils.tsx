import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  EvolutionDetail,
  EvolutionDetailDisplay,
  GenericPropertyDetails,
  PokemonTypes,
} from '@/types/Pokemon.type';
import {
  EVOLUTION_DETAILS_OLD,
  TYPE_ICONS,
  TYPE_LABELS,
  WEAKNESS_CHART,
} from '@/common/constants';
import { CircleIcon } from 'lucide-react';
import { EffectivenessMode } from '@/types';
import { EVOLUTION_DETAILS } from '@/common/constants/evolutions';

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
  details?: EvolutionDetail
): EvolutionDetailDisplay[] => {
  if (!details || Object.keys(details).length === 0) {
    return [
      {
        type: 'trigger',
        label: 'Base Form',
      },
    ];
  }

  const evolutionEntries = Object.entries(details);
  const triggerEntry = (
    evolutionEntries.find(
      ([key]) => key === 'trigger'
    )![1] as GenericPropertyDetails
  ).name;

  console.log('trigger entries', triggerEntry);

  const evolutionDetails: EvolutionDetailDisplay[] = [
    EVOLUTION_DETAILS(triggerEntry).trigger,
  ];

  for (const [key, value] of Object.entries(details)) {
    if (key === 'trigger') continue;
    if (value)
      evolutionDetails.push(
        EVOLUTION_DETAILS(value)[key as keyof EvolutionDetail]
      );
  }

  console.log(evolutionDetails);

  return evolutionDetails;
};

export const displayEvolutionDetails = (
  evolution: string,
  details?: EvolutionDetail
): string | undefined => {
  if (!details || Object.keys(details).length === 0) {
    return 'Base Form';
  }

  // Priority special cases
  if (evolution === 'mantine') {
    return details.party_species?.name
      ? `Having ${details.party_species.name} in your party when leveling up`
      : undefined;
  }

  if (details.location?.name) {
    const specialLocationMap: Record<string, string> = {
      'mt-coronet': 'Thunder Stone',
      'eterna-forest': 'Leaf Stone',
      'sinnoh-route-217': 'Ice Stone',
    };
    const locationName = details.location.name;
    if (specialLocationMap[locationName]) {
      return specialLocationMap[locationName];
    }
  }

  // Regular rules
  const rules: string[] = [];

  if (details.item?.name) {
    rules.push(`using ${EVOLUTION_DETAILS_OLD.item[details.item.name]}`);
  }

  if (details.held_item?.name) {
    const base = `Holding ${
      EVOLUTION_DETAILS_OLD.item[details.held_item.name]
    }`;
    if (details.time_of_day) {
      rules.push(`${base} during ${details.time_of_day}`);
    } else {
      rules.push(`${base} while trading`);
    }
  }

  if (details.gender != null) {
    const genderLabel = details.gender === 2 ? 'Male ♂' : 'Female ♀';
    rules.push(genderLabel);
  }

  if (details.min_level != null) {
    rules.push(`At lvl ${details.min_level}`);
  }

  if (details.min_happiness != null) {
    const happiness = `${EVOLUTION_DETAILS_OLD.min_happiness}${
      details.time_of_day ? ` during ${details.time_of_day}` : ''
    }`;
    rules.push(happiness);
  }

  if (details.min_beauty != null) {
    rules.push(EVOLUTION_DETAILS_OLD.min_beauty);
  }

  if (details.known_move_type) {
    rules.push(
      `Knows a ${details.known_move_type.name}-type move when leveling up`
    );
  }

  if (details.known_move) {
    rules.push(`Knows ${details.known_move.name} move when leveling up`);
  }

  if (details.needs_overworld_rain) {
    rules.push('While raining in overworld');
  }

  if (details.relative_physical_stats != null) {
    const statsRule =
      EVOLUTION_DETAILS_OLD.stats[
        details.relative_physical_stats.toString() as '1' | '0' | '-1'
      ];
    if (statsRule) {
      rules.push(`when ${statsRule}`);
    }
  }

  if (details.trigger?.name === 'level-up' && rules.length === 0) {
    return 'Level up';
  }

  if (details.trigger?.name === 'trade' && rules.length === 0) {
    return 'Trade';
  }

  return rules.length > 0 ? rules.join(', ') : undefined;
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
