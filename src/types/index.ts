import React from 'react';
import { GameVersion } from '@/types/pokemon.types';

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
