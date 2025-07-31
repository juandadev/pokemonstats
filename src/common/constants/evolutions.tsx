import {
  EvolutionDetail,
  EvolutionDetailDisplay,
  GenericPropertyDetails,
  Items,
  PokemonTypes,
  Species,
} from '@/types/Pokemon.type';
import {
  BackpackIcon,
  BadgeQuestionMarkIcon,
  CableIcon,
  CandyIcon,
  CircleDashedIcon,
  CircleFadingArrowUpIcon,
  Disc3Icon,
  FlowerIcon,
  HandHeartIcon,
  MapPinnedIcon,
  MarsIcon,
  MoonIcon,
  SparklesIcon,
  StickerIcon,
  SunIcon,
  VenusIcon,
} from 'lucide-react';
import React from 'react';
import { ITEMS_DATA, TYPE_COLORS } from '@/common/constants/index';
import { clsx } from 'clsx';

export const PARSED_EVOLUTION_TRIGGER: Record<
  string,
  { label: string; icon: React.ReactNode }
> = {
  'base-form': {
    label: 'Base Form',
    icon: <CircleDashedIcon className="w-4 h-4 text-yellow-600" />,
  },
  'level-up': {
    label: 'Level Up',
    icon: <CandyIcon className="w-4 h-4 text-yellow-600" />,
  },
  'use-item': {
    label: 'Use Item',
    icon: <BackpackIcon className="w-4 h-4 text-yellow-600" />,
  },
  trade: {
    label: 'Trade or Linking Cord',
    icon: <CableIcon className="w-4 h-4 text-yellow-600" />,
  },
  'three-critical-hits': {
    label: 'Land three critical hits in a battle',
    icon: <SparklesIcon className="w-4 h-4 text-yellow-600" />,
  },
  default: {
    label: 'Unknown',
    icon: <BadgeQuestionMarkIcon className="w-4 h-4 text-yellow-600" />,
  },
};

export const EVOLUTION_DETAILS = (
  detail:
    | string
    | number
    | boolean
    | Species
    | GenericPropertyDetails
    | GenericPropertyDetails<Items>
): Record<keyof EvolutionDetail, EvolutionDetailDisplay> => ({
  trigger: {
    type: 'trigger',
    label: PARSED_EVOLUTION_TRIGGER[detail as string]?.label || 'Check details',
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
        <VenusIcon className="w-4 h-4 text-pink-500" />
      ) : (
        <MarsIcon className="w-4 h-4 text-cyan-500" />
      ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  held_item: {
    type: 'held_item',
    label: (
      <span>
        While holding:{' '}
        <strong>
          {ITEMS_DATA[(detail as GenericPropertyDetails<Items>).name]?.label}
        </strong>
      </span>
    ),
    image: ITEMS_DATA[(detail as GenericPropertyDetails<Items>).name]?.image,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  item: {
    type: 'item',
    label: (
      <span>
        Required item:{' '}
        <strong>
          {ITEMS_DATA[(detail as GenericPropertyDetails<Items>).name]?.label}
        </strong>
      </span>
    ),
    image: ITEMS_DATA[(detail as GenericPropertyDetails<Items>).name]?.image,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  known_move: {
    type: 'known_move',
    label: (
      <span>
        Knows move:{' '}
        <strong className="capitalize">
          {(detail as GenericPropertyDetails).name}
        </strong>
      </span>
    ),
    image: undefined,
    icon: <Disc3Icon className="h-4 w-4 text-gray-500" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  known_move_type: {
    type: 'known_move_type',
    label: (
      <span>
        Knows any move of type:{' '}
        <strong className="capitalize">
          {(detail as GenericPropertyDetails).name}
        </strong>
      </span>
    ),
    image: undefined,
    icon: (
      <Disc3Icon
        className={clsx(
          'h-4 w-4',
          TYPE_COLORS[(detail as GenericPropertyDetails).name as PokemonTypes]
        )}
      />
    ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  location: {
    type: 'location',
    label: (
      <span>
        Location:{' '}
        <strong className="capitalize">
          {(detail as GenericPropertyDetails).name?.replaceAll('-', ' ')}
        </strong>
      </span>
    ),
    image: undefined,
    icon: <MapPinnedIcon className="h-4 w-4 text-green-600" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_affection: {
    type: 'min_affection',
    label: (
      <span>
        Minimum affection: <strong>{detail as number}</strong>
      </span>
    ),
    image: undefined,
    icon: <HandHeartIcon className="h-4 w-4 text-red-700" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_beauty: {
    type: 'min_beauty',
    label: (
      <span>
        Minimum beauty: <strong>{detail as number}</strong>
      </span>
    ),
    image: undefined,
    icon: <FlowerIcon className="w-4 h-4 text-pink-500" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  min_happiness: {
    type: 'min_happiness',
    label: (
      <span>
        Minimum happiness: <strong>{detail as number}</strong>
      </span>
    ),
    image: undefined,
    icon: <StickerIcon className="h-4 w-4 text-yellow-500" />,
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
    icon: <CircleFadingArrowUpIcon className="w-4 h-4 text-yellow-600" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  needs_overworld_rain: {
    type: 'needs_overworld_rain',
    label: 'Needs overworld rain',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  party_species: {
    type: 'party_species',
    label: 'Party species',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  party_type: {
    type: 'party_type',
    label: 'Party type',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  relative_physical_stats: {
    type: 'relative_physical_stats',
    label: 'Relative physical stats',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  time_of_day: {
    type: 'time_of_day',
    label: (
      <span>
        Time: <strong className="capitalize">{detail as string}</strong>
      </span>
    ),
    image: undefined,
    icon:
      detail === 'day' ? (
        <SunIcon className="w-4 h-4 text-yellow-500" />
      ) : (
        <MoonIcon className="w-4 h-4 text-blue-900" />
      ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  trade_species: {
    type: 'trade_species',
    label: (
      <span>
        Trade for:{' '}
        <strong className="capitalize">
          {(detail as GenericPropertyDetails).name}
        </strong>
      </span>
    ),
    image: `https://projectpokemon.org/images/normal-sprite/${
      (detail as GenericPropertyDetails).name
    }.gif`,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  turn_upside_down: {
    type: 'turn_upside_down',
    label: 'Turn upside down',
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
});
