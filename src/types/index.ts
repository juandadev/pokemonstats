import React from 'react';
import { GameVersion, GenericPropertyDetails } from '@/types/pokemon.types';

export interface IconProps extends React.ComponentProps<'svg'> {
  size?: number;
  color?: string;
}

export type EffectivenessMode = 'offensive' | 'defensive';

export type PokemonCardTabs = 'overview' | 'stats' | 'moves';

export interface Preferences {
  pkmnTab: PokemonCardTabs;
  chartMode: EffectivenessMode;
  msgClosed: boolean;
  game?: GameVersion;
}

export interface EffectEntry {
  effect: string;
  language: GenericPropertyDetails;
  short_effect: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: GenericPropertyDetails;
  version_group: GenericPropertyDetails<GameVersion>;
}

export interface PaginatedResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: GenericPropertyDetails[];
}

export interface GithubStarsResponse {
  stars: number;
  updatedAt?: string;
  error?: string;
}
