import { getTypeIcon } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { clsx } from 'clsx';
import React from 'react';
import { PokemonTypes } from '@/types/pokemon.types';
import { TYPE_LABELS } from '@/common/constants/pokemonTypes';

interface TypeBadgeProps {
  type: PokemonTypes;
  collapsed?: boolean;
  effectivenessLabel?: string;
}

export default function TypeBadge({
  type,
  collapsed = false,
  effectivenessLabel,
}: TypeBadgeProps) {
  const IconComponent = getTypeIcon(type);

  return (
    <Badge
      className={clsx(
        'text-white border-white/30',
        TYPE_LABELS[type]?.background
      )}
    >
      <IconComponent />
      {!collapsed && type}
      {effectivenessLabel && <span>{effectivenessLabel}</span>}
    </Badge>
  );
}
