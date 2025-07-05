import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EvolutionDetail, Species } from '@/types/Pokemon.type';
import { EVOLUTION_DETAILS } from '@/common/constants';

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

  let key = Object.keys(details)[0];
  const value = Object.values(details)[0];
  let additionalRules = '';
  if (key === 'min_level') {
    const statsRule = Object.entries(details).filter(
      ([key]) => key === 'relative_physical_stats'
    );

    if (statsRule.length !== 0) {
      additionalRules = ` when ${
        EVOLUTION_DETAILS.stats[statsRule[0][1]?.toString() || '']
      }`;
    }
  }
  if (evolution === 'mantine') {
    key = 'party_species';
  }
  if (key === 'held_item') {
    if (details.time_of_day && details.time_of_day !== '') {
      additionalRules = `during ${details.time_of_day}`;
    } else {
      additionalRules = 'while trading';
    }
  }
  if (key === 'location') {
    switch ((value as Species)?.name) {
      case 'mt-coronet':
        return 'Thunder Stone';

      case 'eterna-forest':
        return 'Leaf Stone';

      case 'sinnoh-route-217':
        return 'Ice Stone';
    }
  }
  if (key === 'gender') {
    if (details.item) {
      additionalRules = ` using ${EVOLUTION_DETAILS.item[details.item.name]}`;
    }

    if (details.min_level) {
      additionalRules = ` at lvl ${details.min_level}`;
    }
  }
  switch (key) {
    case 'item':
      return EVOLUTION_DETAILS.item[details.item?.name || ''];

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
        EVOLUTION_DETAILS.item[(value as Species).name]
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
