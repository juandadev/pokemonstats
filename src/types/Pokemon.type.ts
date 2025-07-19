import { POKEMON_LIST } from '@/common/constants';

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
  species: Species;
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
  back_female: string;
  back_shiny: string;
  back_shiny_female: null | string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
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

export type EvolutionsData = {
  baby_trigger_item: null;
  chain: Chain;
  id: number;
};

export type Chain = {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Species;
};

export type EvolutionDetail = {
  gender: null;
  held_item: GenericPropertyDetails<Items> | null;
  item: GenericPropertyDetails<Items> | null;
  known_move: Species;
  known_move_type: GenericPropertyDetails | null;
  location: GenericPropertyDetails;
  min_affection: null;
  min_beauty: null;
  min_happiness: number | null;
  min_level: null;
  needs_overworld_rain: boolean;
  party_species: { name: string };
  party_type: null;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: null;
  trigger: GenericPropertyDetails | null;
  turn_upside_down: boolean;
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
  evolutionDetails: EvolutionDetail;
};

export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: GenericPropertyDetails;
  egg_groups: GenericPropertyDetails[];
  evolution_chain: Pick<GenericPropertyDetails, 'url'>;
  evolves_from_species: GenericPropertyDetails;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: string[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: GenericPropertyDetails;
  growth_rate: GenericPropertyDetails;
  habitat: GenericPropertyDetails;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: PokemonTypes;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: GenericPropertyDetails;
  varieties: Variety[];
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: GenericPropertyDetails;
  version: GenericPropertyDetails;
}

export interface Genera {
  genus: string;
  language: GenericPropertyDetails;
}

export interface Name {
  language: GenericPropertyDetails;
  name: string;
}

export interface PalParkEncounter {
  area: GenericPropertyDetails;
  base_score: number;
  rate: number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: GenericPropertyDetails;
}

export interface Variety {
  is_default: boolean;
  pokemon: GenericPropertyDetails;
}

export interface GenericPropertyDetails<T = string> {
  name: T;
  url: string;
}
