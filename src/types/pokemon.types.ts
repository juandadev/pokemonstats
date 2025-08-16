import { POKEMON_LIST } from '@/common/constants';
import { EvolutionChain, EvolutionDetails } from '@/types/evolutions.types';
import { Species } from '@/types/species.types';

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

export type PokemonName = (typeof POKEMON_LIST)[number];

export type PokemonExceptions = {
  name: PokemonName;
  id: number;
};

export type PokemonTypeColors = {
  background: string;
  gradientBackground: string;
  gradientBackgroundLight: string;
  text: string;
  border: string;
};

export type PokemonData = {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Species[];
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
};

export type Ability = {
  ability: Species;
  is_hidden: boolean;
  slot: number;
};

export type Cries = {
  latest: string;
  legacy: string;
};

export type GameIndex = {
  game_index: number;
  version: Species;
};

export type HeldItem = {
  item: Species;
  version_details: VersionDetail[];
};

export type VersionDetail = {
  rarity: number;
  version: Species;
};

export type Move = {
  move: Species;
  version_group_details: VersionGroupDetail[];
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
};

export type GenerationV = {
  'black-white': Sprites;
};

export type GenerationIv = {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
};

export type Versions = {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
};

export type Other = {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
  showdown: Sprites;
};

export type Sprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other?: Other | null;
  versions?: Versions | null;
};

export type GenerationI = {
  'red-blue': RedBlue;
  yellow: RedBlue;
};

export type RedBlue = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

export type GenerationIi = {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
};

export type Crystal = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

export type Gold = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
};

export type GenerationIii = {
  emerald: OfficialArtwork;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
};

export type OfficialArtwork = {
  front_default: string;
  front_shiny: string;
};

export type Home = {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type GenerationVii = {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': Home;
};

export type DreamWorld = {
  front_default: string;
  front_female: null | string;
};

export type GenerationViii = {
  icons: DreamWorld;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Species;
};

export type Type = {
  slot: number;
  type: Species;
};

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
  pokemonData: PokemonData | Record<never, never>;
  speciesData: Species | Record<never, never>;
  evolutionsData: EvolutionChain | Record<never, never>;
}
