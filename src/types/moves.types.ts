import {
  GameVersion,
  GenericPropertyDetails,
  PokemonTypes,
} from '@/types/pokemon.types';
import { Name } from '@/types/species.types';

export interface MoveDisplayData {
  name: string;
  type: PokemonTypes;
  power: number;
  pp: number;
  accuracy: number;
  gameDetails: MoveGameDetails[];
}

export interface MoveGameDetails {
  level: number;
  description: string;
  game: GameVersion;
}

export interface MoveApiData {
  accuracy: number;
  contest_combos: ContestCombos;
  contest_effect: Pick<GenericPropertyDetails, 'url'>;
  contest_type: GenericPropertyDetails;
  damage_class: GenericPropertyDetails;
  effect_chance: null;
  effect_changes: null;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: GenericPropertyDetails;
  id: number;
  learned_by_pokemon: GenericPropertyDetails[];
  machines: null;
  meta: Meta;
  name: string;
  names: Name[];
  past_values: null;
  power: number;
  pp: number;
  priority: number;
  stat_changes: null;
  super_contest_effect: Pick<GenericPropertyDetails, 'url'>;
  target: GenericPropertyDetails;
  type: GenericPropertyDetails<PokemonTypes>;
}

export interface ContestCombos {
  normal: ContestComboType;
  super: ContestComboType;
}

export interface ContestComboType {
  use_after: GenericPropertyDetails[] | null;
  use_before: GenericPropertyDetails[] | null;
}

export interface EffectEntry {
  effect: string;
  language: GenericPropertyDetails;
  short_effect: string;
}

export interface Meta {
  ailment: GenericPropertyDetails;
  ailment_chance: number;
  category: GenericPropertyDetails;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: null;
  max_turns: null;
  min_hits: null;
  min_turns: null;
  stat_chance: number;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: GenericPropertyDetails;
  version_group: GenericPropertyDetails<GameVersion>;
}
