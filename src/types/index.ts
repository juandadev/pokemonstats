import React from 'react';

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
}
