import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EvolutionDetail, PokemonTypes } from '@/types/Pokemon.type';
import {
  EVOLUTION_DETAILS,
  TYPE_ICONS,
  TYPE_LABELS,
  WEAKNESS_CHART,
} from '@/common/constants';
import { CircleIcon } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPokeApiName(name: string) {
  if (!name.startsWith('Mega ')) return name.toLowerCase().replace(/\s+/g, '-');

  const parts = name.split(' ');
  const base = parts.slice(1).join('-').toLowerCase(); // everything after "Mega"
  return `${base}-mega`;
}

export const displayEvolutionDetails = (
  evolution: string,
  details: EvolutionDetail
) => {
  if (!details || Object.keys(details).length === 0) {
    return;
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
    rules.push(`using ${EVOLUTION_DETAILS.item[details.item.name]}`);
  }

  if (details.held_item?.name) {
    const base = `Holding ${EVOLUTION_DETAILS.item[details.held_item.name]}`;
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
    rules.push(`at lvl ${details.min_level}`);
  }

  if (details.min_happiness != null) {
    const happiness = `${EVOLUTION_DETAILS.min_happiness}${
      details.time_of_day ? ` during ${details.time_of_day}` : ''
    }`;
    rules.push(happiness);
  }

  if (details.min_beauty != null) {
    rules.push(EVOLUTION_DETAILS.min_beauty);
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
      EVOLUTION_DETAILS.stats[
        details.relative_physical_stats.toString() as '1' | '0' | '-1'
      ];
    if (statsRule) {
      rules.push(`when ${statsRule}`);
    }
  }

  if (details.trigger?.name === 'level-up' && rules.length === 0) {
    return 'Level up';
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
  superEffective: string[];
  notVeryEffective: string[];
  noEffect: string[];
}

export const getEffectivenessList = (
  typeIndex: number | null
): EffectivenessList => {
  const effectivenessList: EffectivenessList = {
    superEffective: [],
    notVeryEffective: [],
    noEffect: [],
  };

  if (!typeIndex) return effectivenessList;

  const weaknessRow = WEAKNESS_CHART[typeIndex];

  // We start from index 1 because index 0 is the type itself
  for (let i = 1; i < weaknessRow.length; i++) {
    const getTypeName = Object.keys(TYPE_LABELS)[i - 1];

    if (weaknessRow[i] === 2) {
      effectivenessList.superEffective = [
        ...(effectivenessList.superEffective || []),
        getTypeName,
      ];
    }

    if (weaknessRow[i] === 0.5) {
      effectivenessList.notVeryEffective = [
        ...(effectivenessList.notVeryEffective || []),
        getTypeName,
      ];
    }

    if (weaknessRow[i] === 0) {
      effectivenessList.noEffect = [
        ...(effectivenessList.noEffect || []),
        getTypeName,
      ];
    }
  }

  return effectivenessList;
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
