import {
  EvolutionDetail,
  EvolutionDetailDisplay,
  GenericPropertyDetails,
  Items,
  Species,
} from '@/types/Pokemon.type';
import {
  CircleFadingArrowUpIcon,
  MarsIcon,
  SparklesIcon,
  VenusIcon,
} from 'lucide-react';
import React from 'react';

export const PARSED_EVOLUTION_TRIGGER: Record<
  string,
  { label: string; icon: React.ReactNode }
> = {
  'level-up': {
    label: 'Level Up',
    icon: <CircleFadingArrowUpIcon className="w-4 h-4 text-purple-500" />,
  },
};

export const EVOLUTION_DETAILS = (
  detail:
    | string
    | number
    | true
    | Species
    | GenericPropertyDetails
    | GenericPropertyDetails<Items>
): Record<keyof EvolutionDetail, EvolutionDetailDisplay> => ({
  trigger: {
    type: 'trigger',
    label: PARSED_EVOLUTION_TRIGGER[detail as string]?.label || (
      <SparklesIcon className="w-4 h-4 text-purple-500" />
    ),
    image: undefined,
    icon: PARSED_EVOLUTION_TRIGGER[detail as string]?.icon || (
      <div className="w-1 h-1 bg-gray-400 rounded-full" />
    ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  gender: {
    type: 'gender',
    label: (
      <span>
        Gender: <strong>{(detail as number) === 1 ? 'Female' : 'Male'}</strong>
      </span>
    ),
    image: undefined,
    icon:
      (detail as number) === 1 ? (
        <VenusIcon className="w-3 h-3 text-pink-500" />
      ) : (
        <MarsIcon className="w-3 h-3 text-cyan-500" />
      ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  held_item: {
    type: 'held_item',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  item: {
    type: 'item',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  known_move: {
    type: 'known_move',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  known_move_type: {
    type: 'known_move_type',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  location: {
    type: 'location',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_affection: {
    type: 'min_affection',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_beauty: {
    type: 'min_beauty',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_happiness: {
    type: 'min_happiness',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_level: {
    type: 'min_level',
    label: (
      <span>
        Minimum level: <strong>{detail as number}</strong>
      </span>
    ),
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  needs_overworld_rain: {
    type: 'needs_overworld_rain',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  party_species: {
    type: 'party_species',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  party_type: {
    type: 'party_type',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  relative_physical_stats: {
    type: 'relative_physical_stats',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  time_of_day: {
    type: 'time_of_day',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  trade_species: {
    type: 'trade_species',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },

  turn_upside_down: {
    type: 'turn_upside_down',
    label: '',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
});
