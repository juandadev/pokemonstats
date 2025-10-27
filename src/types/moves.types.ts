import {
  GameVersion,
  GenericPropertyDetails,
  PokemonTypes,
} from '@/types/pokemon.types';
import { Name } from '@/types/species.types';
import { EffectEntry, FlavorTextEntry } from '@/types/index';

export type DamageType = 'physical' | 'special' | 'status';

export interface MoveDisplayData {
  name: string;
  type: PokemonTypes;
  power: number | null;
  pp: number;
  accuracy: number | null;
  gameDetails: MoveGameDetails[];
  damageClass: DamageType;
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
  damage_class: GenericPropertyDetails<DamageType>;
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
