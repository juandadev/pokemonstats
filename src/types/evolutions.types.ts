import React from 'react';
import { GenericPropertyDetails } from '@/types/pokemon.types';

export interface EvolutionChain {
  baby_trigger_item: GenericPropertyDetails | null;
  chain: Chain;
  id: number;
}

export type Chain = {
  evolution_details: EvolutionDetails[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: GenericPropertyDetails;
};

export type EvolutionDetails = {
  gender: number | null;
  held_item: GenericPropertyDetails | null;
  item: GenericPropertyDetails | null;
  known_move: GenericPropertyDetails | null;
  known_move_type: GenericPropertyDetails | null;
  location: GenericPropertyDetails | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_species: GenericPropertyDetails | null;
  party_type: GenericPropertyDetails | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: GenericPropertyDetails | null;
  trigger: GenericPropertyDetails | null;
  turn_upside_down: boolean;
};

export type EvolutionDetailDisplay = {
  type: keyof EvolutionDetails;
  label: React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
  details?: string;
  generation?: string;
  gameVersion?: string;
};

export type EvolutionCardData = {
  slug: string;
  displayName: string;
  spriteUrl: string | null;
  evolutionDetails: EvolutionDetails[] | null;
};
