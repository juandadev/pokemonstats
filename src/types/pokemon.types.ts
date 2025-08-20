import { EvolutionChain, EvolutionDetails } from '@/types/evolutions.types';
import { Species } from '@/types/species.types';
import { GAME_LIST } from '@/common/constants/games';
import { MoveApiData } from '@/types/moves.types';

export type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export type GameVersion = (typeof GAME_LIST)[number];

export type PokemonTypeColors = {
  background: string;
  gradientBackground: string;
  gradientBackgroundLight: string;
  text: string;
  border: string;
};

export interface PokemonData {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: GenericPropertyDetails[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: GenericPropertyDetails;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: GenericPropertyDetails;
  is_hidden: boolean;
  slot: number;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version: GenericPropertyDetails;
}

export interface HeldItem {
  item: GenericPropertyDetails;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: GenericPropertyDetails;
}

export interface Move {
  move: GenericPropertyDetails;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: GenericPropertyDetails;
  order: number;
  version_group: GenericPropertyDetails<GameVersion>;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: GenericPropertyDetails;
}

export interface Type {
  slot: number;
  type: GenericPropertyDetails<PokemonTypes>;
}

// Sprite Types
export interface Sprites {
  front_default: string;
  front_shiny: string;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_female?: string | null;
  front_shiny_female?: string | null;
  animated?: Sprites | null;
  other?: Other | null;
  versions?: Versions | null;
}

export interface Other {
  dream_world: Sprites;
  home: Sprites;
  'official-artwork': Sprites;
  showdown: Sprites;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface GenerationI {
  'red-blue': Partial<Sprites>;
  yellow: Partial<Sprites>;
}

export interface GenerationIi {
  crystal: Partial<Sprites>;
  gold: Partial<Sprites>;
  silver: Partial<Sprites>;
}

export interface GenerationIii {
  emerald: Partial<Sprites>;
  'firered-leafgreen': Partial<Sprites>;
  'ruby-sapphire': Partial<Sprites>;
}

export interface GenerationIv {
  'diamond-pearl': Partial<Sprites>;
  'heartgold-soulsilver': Partial<Sprites>;
  platinum: Partial<Sprites>;
}

export interface GenerationV {
  'black-white': Partial<Sprites>;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': Partial<Sprites>;
  'x-y': Partial<Sprites>;
}

export interface GenerationVii {
  icons: Partial<Sprites>;
  'ultra-sun-ultra-moon': Partial<Sprites>;
}

export interface GenerationViii {
  icons: Partial<Sprites>;
}

export type Items =
  | 'water-stone'
  | 'thunder-stone'
  | 'fire-stone'
  | 'leaf-stone'
  | 'sun-stone'
  | 'shiny-stone'
  | 'dusk-stone'
  | 'dawn-stone'
  | 'moon-stone'
  | 'oval-stone'
  | 'kings-rock'
  | 'up-grade'
  | 'dubious-disc'
  | 'metal-coat'
  | 'black-augurite'
  | 'dragon-scale'
  | 'reaper-cloth'
  | 'electirizer'
  | 'magmarizer'
  | 'protector'
  | 'sachet'
  | 'whipped-dream'
  | 'prism-scale'
  | 'deep-sea-tooth'
  | 'deep-sea-scale'
  | 'razor-claw'
  | 'peat-block'
  | 'razor-fang'
  | 'cracked-pot';

export type PokemonEvolutionType = {
  name: string;
  evolutionDetails: EvolutionDetails[];
};

export interface GenericPropertyDetails<T = string> {
  name: T;
  url: string;
}

export interface CompletePokemonData {
  pokemonData?: PokemonData;
  speciesData?: Species;
  evolutionsData?: EvolutionChain;
  movesData?: MoveApiData[];
}

export type MegaVariant = 'x' | 'y';

export type Region = 'alola' | 'galar' | 'hisui' | 'paldea';

// Suggestion list
export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}

export interface PokemonIndexItem {
  label: string;
  slug: string;
  sprite: string | null;
}
