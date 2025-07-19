import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EvolutionDetail, PokemonTypes, Species } from '@/types/Pokemon.type';
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
  console.log(details);
  if (!details || Object.keys(details).length === 0) {
    return;
  }

  let key = Object.keys(details)[0];
  const value = Object.values(details)[0];
  let additionalRules = '';

  if (details.min_level) {
    const statsRule = details.relative_physical_stats;
    console.log(statsRule);

    if (statsRule) {
      additionalRules = ` when ${
        EVOLUTION_DETAILS.stats[
          (statsRule.toString() as '1' | '0' | '-1') || ''
        ]
      }`;
    }
  }
  if (evolution === 'mantine') {
    key = 'party_species';
  }
  if (details.held_item) {
    if (details.time_of_day && details.time_of_day !== '') {
      additionalRules = `during ${details.time_of_day}`;
    } else {
      additionalRules = 'while trading';
    }
  }
  if (details.location) {
    switch (details.location.name) {
      case 'mt-coronet':
        return 'Thunder Stone';

      case 'eterna-forest':
        return 'Leaf Stone';

      case 'sinnoh-route-217':
        return 'Ice Stone';
    }
  }
  if (details.gender) {
    if (details.item) {
      additionalRules = ` using ${EVOLUTION_DETAILS.item[details.item.name]}`;
    }

    if (details.min_level) {
      additionalRules = ` at lvl ${details.min_level}`;
    }
  }

  switch (key) {
    case 'item':
      return EVOLUTION_DETAILS.item[details.item!.name];

    case 'min_happiness':
      return `${EVOLUTION_DETAILS[key]}${
        details['time_of_day'] !== '' ? ` during ${details['time_of_day']}` : ''
      }`;

    case 'min_beauty':
      return EVOLUTION_DETAILS[key];

    case 'location':
      return additionalRules;

    case 'known_move_type':
      return `Knows a ${(value as Species).name}-type move when lvl up`;

    case 'known_move':
      return `Knows ${(value as Species).name} move when lvl up`;

    case 'min_level':
      return `Lvl ${value}${additionalRules}`;

    case 'held_item':
      return `Holding ${
        EVOLUTION_DETAILS.item[details.item!.name]
      } ${additionalRules}`;

    case 'needs_overworld_rain':
      return 'Trading';

    case 'party_species':
      return `Having ${
        details.party_species?.name || ''
      } in your party when lvlv up`;

    case 'gender':
      return `${value === 2 ? `Male ♂` : 'Female ♀'}${additionalRules}`;
  }
};

export const getTypeIcon = (type: PokemonTypes) => {
  const Icon = TYPE_ICONS[type] || CircleIcon;
  const TypeIcon = (props: React.ComponentProps<'svg'>) => <Icon {...props} />;
  TypeIcon.displayName = 'TypeIcon';

  return TypeIcon;
};

interface EffectivenessList {
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
