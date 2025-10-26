import {
  GenericPropertyDetails,
  Items,
  PokemonTypes,
} from '@/types/pokemon.types';
import {
  BackpackIcon,
  BadgeQuestionMarkIcon,
  CableIcon,
  CandyIcon,
  CircleDashedIcon,
  CircleFadingArrowUpIcon,
  CloudRainIcon,
  Disc3Icon,
  FlowerIcon,
  HandHeartIcon,
  MapPinnedIcon,
  MarsIcon,
  MoonIcon,
  SparklesIcon,
  StickerIcon,
  SunIcon,
  SwitchCameraIcon,
  VenusIcon,
} from 'lucide-react';
import React from 'react';
import { clsx } from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import {
  EvolutionDetailDisplay,
  EvolutionDetails,
} from '@/types/evolutions.types';
import { Species } from '@/types/species.types';
import { TYPE_COLORS } from '@/common/constants/pokemonTypes';
import ITEMS from '@/data/items-index.json';
import { ItemData } from '@/types/items.types';
import { titleCase } from '@/lib/utils';
import MegaEvolutionIcon from '@/icons/MegaEvolutionIcon';

export const PARSED_EVOLUTION_TRIGGER: Record<
  string,
  { label: string; icon: React.ReactNode }
> = {
  'base-form': {
    label: 'Base Form',
    icon: <CircleDashedIcon className="w-4 h-4 text-yellow-600 shrink-0" />,
  },
  'level-up': {
    label: 'Level Up',
    icon: <CandyIcon className="w-4 h-4 text-yellow-600 shrink-0" />,
  },
  'use-item': {
    label: 'Use Item',
    icon: <BackpackIcon className="w-4 h-4 text-yellow-600 shrink-0" />,
  },
  trade: {
    label: 'Trade or Linking Cord',
    icon: <CableIcon className="w-4 h-4 text-yellow-600 shrink-0" />,
  },
  'three-critical-hits': {
    label: 'Land three critical hits in a battle',
    icon: <SparklesIcon className="w-4 h-4 text-yellow-600 shrink-0" />,
  },
  'mega-evolution': {
    label: 'Mega Evolution',
    icon: (
      <div className="rainbow-gradient rounded-full p-0.5">
        <MegaEvolutionIcon className="w-4 h-4 text-black shrink-0" />
      </div>
    ),
  },
  default: {
    label: 'Unknown',
    icon: (
      <BadgeQuestionMarkIcon className="w-4 h-4 text-yellow-600 shrink-0" />
    ),
  },
};

const ITEMS_DATA = ITEMS as ItemData[];

const getItemData = (itemName: string): ItemData | undefined => {
  return ITEMS_DATA.find((item) => item.name === itemName);
};

export const EVOLUTION_DETAILS = (
  detail:
    | string
    | number
    | boolean
    | Species
    | GenericPropertyDetails
    | GenericPropertyDetails<Items>
): Record<keyof EvolutionDetails, EvolutionDetailDisplay> => ({
  trigger: {
    type: 'trigger',
    label: PARSED_EVOLUTION_TRIGGER[detail as string]?.label || 'Missing info',
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
        <VenusIcon className="w-4 h-4 text-pink-500 shrink-0" />
      ) : (
        <MarsIcon className="w-4 h-4 text-cyan-500 shrink-0" />
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
          {titleCase(
            getItemData((detail as GenericPropertyDetails).name)?.name || ''
          ) || 'Missing info'}
        </strong>
      </span>
    ),
    image:
      getItemData((detail as GenericPropertyDetails).name)?.sprites.default ||
      '',
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
          {titleCase(
            getItemData((detail as GenericPropertyDetails).name)?.name || ''
          ) || 'Missing info'}
        </strong>
      </span>
    ),
    image:
      getItemData((detail as GenericPropertyDetails).name)?.sprites.default ||
      '',
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
    icon: <Disc3Icon className="h-4 w-4 text-gray-500 shrink-0" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  known_move_type: {
    type: 'known_move_type',
    label: (
      <span>
        Knows any move of type:{' '}
        <TypeBadge
          type={(detail as GenericPropertyDetails).name as PokemonTypes}
        />
      </span>
    ),
    image: undefined,
    icon: (
      <Disc3Icon
        className={clsx(
          'h-4 w-4 shrink-0',
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
          {(detail as GenericPropertyDetails).name?.replaceAll('-', ' ') ||
            'Missing info'}
        </strong>
      </span>
    ),
    image: undefined,
    icon: <MapPinnedIcon className="h-4 w-4 text-green-600 shrink-0" />,
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
    icon: <HandHeartIcon className="h-4 w-4 text-red-700 shrink-0" />,
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
    icon: <FlowerIcon className="w-4 h-4 text-pink-500 shrink-0" />,
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
    icon: <StickerIcon className="h-4 w-4 text-yellow-500 shrink-0" />,
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
    icon: (
      <CircleFadingArrowUpIcon className="w-4 h-4 text-yellow-600 shrink-0" />
    ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  needs_overworld_rain: {
    type: 'needs_overworld_rain',
    label: (
      <span>
        Weather: <strong>Rain</strong>{' '}
        <span className="text-gray-400">
          (not during battle and not via moves like Rain Dance)
        </span>
      </span>
    ),
    image: undefined,
    icon: <CloudRainIcon className="h-4 w-4 text-cyan-500 shrink-0" />,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  party_species: {
    type: 'party_species',
    label: (
      <span>
        Have in your party:{' '}
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
  party_type: {
    type: 'party_type',
    label: (
      <span>
        Have in your party any Pokémon of type:{' '}
        <TypeBadge
          type={(detail as GenericPropertyDetails).name as PokemonTypes}
        />
      </span>
    ),
    image: undefined,
    icon: undefined,
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
  relative_physical_stats: {
    type: 'relative_physical_stats',
    label: (
      <span>
        Physical stats:{' '}
        <strong>
          {(detail as number) === 1
            ? 'Attack > Defense'
            : (detail as number) === -1
            ? 'Attack < Defense'
            : 'Attack = Defense'}
        </strong>
      </span>
    ),
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
        <SunIcon className="w-4 h-4 text-yellow-500 shrink-0" />
      ) : (
        <MoonIcon className="w-4 h-4 text-blue-900 shrink-0" />
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
    label: (
      <span>
        While device is <strong>held upside down</strong>
      </span>
    ),
    image: undefined,
    icon: (
      <SwitchCameraIcon className="w-4 h-4 text-yellow-600 shrink-0 rotate-180" />
    ),
    details: undefined,
    generation: undefined,
    gameVersion: undefined,
  },
});
