import { PokemonTypeColors, PokemonTypes } from '@/types/pokemon.types';
import React from 'react';
import NormalTypeIcon from '@/icons/NormalTypeIcon';
import PoisonTypeIcon from '@/icons/PoisonTypeIcon';
import PsychicTypeIcon from '@/icons/PsychicTypeIcon';
import RockTypeIcon from '@/icons/RockTypeIcon';
import SteelTypeIcon from '@/icons/SteelTypeIcon';
import WaterTypeIcon from '@/icons/WaterTypeIcon';
import FireTypeIcon from '@/icons/FireTypeIcon';
import FlyingTypeIcon from '@/icons/FlyingTypeIcon';
import GhostTypeIcon from '@/icons/GhostTypeIcon';
import GrassTypeIcon from '@/icons/GrassTypeIcon';
import IceTypeIcon from '@/icons/IceTypeIcon';
import BugTypeIcon from '@/icons/BugTypeIcon';
import DarkTypeIcon from '@/icons/DarkTypeIcon';
import DragonTypeIcon from '@/icons/DragonTypeIcon';
import ElectricTypeIcon from '@/icons/ElectricTypeIcon';
import FairyTypeIcon from '@/icons/FairyTypeIcon';
import FightingTypeIcon from '@/icons/FightingTypeIcon';
import GroundTypeIcon from '@/icons/GroundTypeIcon';

export const TYPE_LABELS: Record<PokemonTypes, PokemonTypeColors> = {
  normal: {
    background: 'bg-normal',
    gradientBackground: 'bg-normal-gradient',
    gradientBackgroundLight: 'bg-normal-gradient-light',
    text: 'text-normal-gradient',
    border: 'border-normal',
  },
  fire: {
    background: 'bg-fire',
    gradientBackground: 'bg-fire-gradient',
    gradientBackgroundLight: 'bg-fire-gradient-light',
    text: 'text-fire-gradient',
    border: 'border-fire',
  },
  water: {
    background: 'bg-water',
    gradientBackground: 'bg-water-gradient',
    gradientBackgroundLight: 'bg-water-gradient-light',
    text: 'text-water-gradient',
    border: 'border-water',
  },
  electric: {
    background: 'bg-electric',
    gradientBackground: 'bg-electric-gradient',
    gradientBackgroundLight: 'bg-electric-gradient-light',
    text: 'text-electric-gradient',
    border: 'border-electric',
  },
  grass: {
    background: 'bg-grass',
    gradientBackground: 'bg-grass-gradient',
    gradientBackgroundLight: 'bg-grass-gradient-light',
    text: 'text-grass-gradient',
    border: 'border-grass',
  },
  ice: {
    background: 'bg-ice',
    gradientBackground: 'bg-ice-gradient',
    gradientBackgroundLight: 'bg-ice-gradient-light',
    text: 'text-ice-gradient',
    border: 'border-ice',
  },
  fighting: {
    background: 'bg-fighting',
    gradientBackground: 'bg-fighting-gradient',
    gradientBackgroundLight: 'bg-fighting-gradient-light',
    text: 'text-fighting-gradient',
    border: 'border-fighting',
  },
  poison: {
    background: 'bg-poison',
    gradientBackground: 'bg-poison-gradient',
    gradientBackgroundLight: 'bg-poison-gradient-light',
    text: 'text-poison-gradient',
    border: 'border-poison',
  },
  ground: {
    background: 'bg-ground',
    gradientBackground: 'bg-ground-gradient',
    gradientBackgroundLight: 'bg-ground-gradient-light',
    text: 'text-ground-gradient',
    border: 'border-ground',
  },
  flying: {
    background: 'bg-flying',
    gradientBackground: 'bg-flying-gradient',
    gradientBackgroundLight: 'bg-flying-gradient-light',
    text: 'text-flying-gradient',
    border: 'border-flying',
  },
  psychic: {
    background: 'bg-psychic',
    gradientBackground: 'bg-psychic-gradient',
    gradientBackgroundLight: 'bg-psychic-gradient-light',
    text: 'text-psychic-gradient',
    border: 'border-psychic',
  },
  bug: {
    background: 'bg-bug',
    gradientBackground: 'bg-bug-gradient',
    gradientBackgroundLight: 'bg-bug-gradient-light',
    text: 'text-bug-gradient',
    border: 'border-bug',
  },
  rock: {
    background: 'bg-rock',
    gradientBackground: 'bg-rock-gradient',
    gradientBackgroundLight: 'bg-rock-gradient-light',
    text: 'text-rock-gradient',
    border: 'border-rock',
  },
  ghost: {
    background: 'bg-ghost',
    gradientBackground: 'bg-ghost-gradient',
    gradientBackgroundLight: 'bg-ghost-gradient-light',
    text: 'text-ghost-gradient',
    border: 'border-ghost',
  },
  dragon: {
    background: 'bg-dragon',
    gradientBackground: 'bg-dragon-gradient',
    gradientBackgroundLight: 'bg-dragon-gradient-light',
    text: 'text-dragon-gradient',
    border: 'border-dragon',
  },
  dark: {
    background: 'bg-dark',
    gradientBackground: 'bg-dark-gradient',
    gradientBackgroundLight: 'bg-dark-gradient-light',
    text: 'text-dark-gradient',
    border: 'border-dark',
  },
  steel: {
    background: 'bg-steel',
    gradientBackground: 'bg-steel-gradient',
    gradientBackgroundLight: 'bg-steel-gradient-light',
    text: 'text-steel-gradient',
    border: 'border-steel',
  },
  fairy: {
    background: 'bg-fairy',
    gradientBackground: 'bg-fairy-gradient',
    gradientBackgroundLight: 'bg-fairy-gradient-light',
    text: 'text-fairy-gradient',
    border: 'border-fairy',
  },
};

export const TYPES_LIST = Object.keys(TYPE_LABELS).map((type, index) => ({
  name: type as PokemonTypes,
  index: index + 1,
}));

export const TYPE_ICONS: Record<PokemonTypes, React.ElementType> = {
  normal: NormalTypeIcon,
  fire: FireTypeIcon,
  water: WaterTypeIcon,
  electric: ElectricTypeIcon,
  grass: GrassTypeIcon,
  ice: IceTypeIcon,
  fighting: FightingTypeIcon,
  poison: PoisonTypeIcon,
  ground: GroundTypeIcon,
  flying: FlyingTypeIcon,
  psychic: PsychicTypeIcon,
  bug: BugTypeIcon,
  rock: RockTypeIcon,
  ghost: GhostTypeIcon,
  dragon: DragonTypeIcon,
  dark: DarkTypeIcon,
  steel: SteelTypeIcon,
  fairy: FairyTypeIcon,
};

export const TYPE_COLORS: Record<PokemonTypes, string> = {
  normal: 'text-normal',
  fire: 'text-fire',
  water: 'text-water',
  electric: 'text-electric',
  grass: 'text-grass',
  ice: 'text-ice',
  fighting: 'text-fighting',
  poison: 'text-poison',
  ground: 'text-ground',
  flying: 'text-flying',
  psychic: 'text-psychic',
  bug: 'text-bug',
  rock: 'text-rock',
  ghost: 'text-ghost',
  dragon: 'text-dragon',
  dark: 'text-dark',
  steel: 'text-steel',
  fairy: 'text-fairy',
};
