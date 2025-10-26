import { GenericPropertyDetails } from '@/types/pokemon.types';
import { FlavorTextEntry } from '@/types/index';

export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: GenericPropertyDetails;
  egg_groups: GenericPropertyDetails[];
  evolution_chain: Pick<GenericPropertyDetails, 'url'>;
  evolves_from_species: GenericPropertyDetails;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescriptions[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: GenericPropertyDetails;
  growth_rate: GenericPropertyDetails;
  habitat: GenericPropertyDetails | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: GenericPropertyDetails;
  varieties: Variety[];
}

export interface FormDescriptions {
  description: boolean;
  language: GenericPropertyDetails;
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
