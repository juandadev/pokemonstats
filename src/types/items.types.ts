import { GenericPropertyDetails } from '@/types/pokemon.types';

import { EffectEntry, FlavorTextEntry } from '@/types/index';

export interface ItemData {
  attributes: GenericPropertyDetails[];
  baby_trigger_for: null;
  category: GenericPropertyDetails;
  cost: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  fling_effect: null;
  fling_power: null;
  game_indices: GameIndex[];
  held_by_pokemon: GenericPropertyDetails[];
  id: number;
  machines: GenericPropertyDetails[];
  name: string;
  names: ItemNames[];
  sprites: {
    default: string | null;
  };
}

export interface GameIndex {
  game_index: number;
  generation: GenericPropertyDetails;
}

export interface ItemNames {
  language: GenericPropertyDetails;
  name: string;
}
