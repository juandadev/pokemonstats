import React from 'react';
import { PokemonTypeColors, PokemonTypes } from '@/types/pokemon.types';
import {
  BadgeIcon,
  BirdIcon,
  BrainIcon,
  BugIcon,
  CircleIcon,
  CogIcon,
  DropletIcon,
  EyeIcon,
  FlameIcon,
  GhostIcon,
  GrabIcon,
  LeafIcon,
  MountainIcon,
  SkullIcon,
  SnowflakeIcon,
  StarIcon,
  WindIcon,
  ZapIcon,
} from 'lucide-react';

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
  normal: CircleIcon,
  fire: FlameIcon,
  water: DropletIcon,
  electric: ZapIcon,
  grass: LeafIcon,
  ice: SnowflakeIcon,
  fighting: GrabIcon,
  poison: SkullIcon,
  ground: MountainIcon,
  flying: WindIcon,
  psychic: BrainIcon,
  bug: BugIcon,
  rock: BadgeIcon,
  ghost: GhostIcon,
  dragon: BirdIcon,
  dark: EyeIcon,
  steel: CogIcon,
  fairy: StarIcon,
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

export const ITEMS_DATA: Record<string, { label: string; image?: string }> = {
  'water-stone': {
    label: 'Water Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png',
  },
  'thunder-stone': {
    label: 'Thunder Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png',
  },
  'fire-stone': {
    label: 'Fire Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png',
  },
  'leaf-stone': {
    label: 'Leaf Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png',
  },
  'ice-stone': {
    label: 'Ice Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-stone.png',
  },
  'sun-stone': {
    label: 'Sun Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sun-stone.png',
  },
  'shiny-stone': {
    label: 'Shiny Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/shiny-stone.png',
  },
  'dusk-stone': {
    label: 'Dusk Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png',
  },
  'dawn-stone': {
    label: 'Dawn Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dawn-stone.png',
  },
  'moon-stone': {
    label: 'Moon Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png',
  },
  'oval-stone': {
    label: 'Oval Stone',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oval-stone.png',
  },
  'kings-rock': {
    label: "King's Rock",
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/kings-rock.png',
  },
  'up-grade': {
    label: 'Up-grade',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/up-grade.png',
  },
  'dubious-disc': {
    label: 'Dubious Disc',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dubious-disc.png',
  },
  'metal-coat': {
    label: 'Metal Coat',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-coat.png',
  },
  'black-augurite': {
    label: 'Black Augurite',
    image:
      'https://archives.bulbagarden.net/media/upload/0/0f/Bag_Black_Augurite_SV_Sprite.png',
  },
  'dragon-scale': {
    label: 'Dragon Scale',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragon-scale.png',
  },
  'reaper-cloth': {
    label: 'Reaper Cloth',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/reaper-cloth.png',
  },
  electirizer: {
    label: 'Electirizer',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/electirizer.png',
  },
  magmarizer: {
    label: 'Magmarizer',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/magmarizer.png',
  },
  protector: {
    label: 'Protector',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protector.png',
  },
  sachet: {
    label: 'Sachet',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sachet.png',
  },
  'whipped-dream': {
    label: 'Whipped Dream',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/whipped-deam.png',
  },
  'prism-scale': {
    label: 'Prism Scale',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/prism-scale.png',
  },
  'deep-sea-tooth': {
    label: 'Deep Sea Tooth',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/deep-sea-tooth.png',
  },
  'deep-sea-scale': {
    label: 'Deep Sea Scale',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/deep-sea-scale.png',
  },
  'razor-claw': {
    label: 'Razor Claw',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razor-claw.png',
  },
  'peat-block': {
    label: 'Peat Block',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/peat-block.png',
  },
  'razor-fang': {
    label: 'Razor Fang',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/razor-fang.png',
  },
  'cracked-pot': {
    label: 'Cracked Pot',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cracked-pot.png',
  },
  'galarica-cuff': {
    label: 'Galarica Cuff',
    image:
      'https://archives.bulbagarden.net/media/upload/f/f6/Bag_Galarica_Cuff_SV_Sprite.png',
  },
  'galarica-wreath': {
    label: 'Galarica Wreath',
    image:
      'https://archives.bulbagarden.net/media/upload/4/44/Bag_Galarica_Wreath_SV_Sprite.png',
  },
};

/**
 * Weakness chart for Pokémon types.
 * The first level index represents the attacking type effectiveness list.
 * The first item in each subarray is the index of the type itself.
 *
 * The following items represent the effectiveness against other types in the order:
 * Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy.
 *
 * Values:
 * 0: No Effect
 * 0.5: Not Very Effective (0.5x)
 * 1: Neutral (1x)
 * 2: Super Effective (2x)
 */
export const WEAKNESS_CHART = [
  [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
  [1, 1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
  [2, 1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
  [3, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
  [4, 1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
  [5, 1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
  [6, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
  [7, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
  [8, 1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
  [9, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
  [10, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
  [11, 1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
  [12, 1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
  [13, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
  [14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
  [15, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
  [16, 1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
  [17, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1],
];
