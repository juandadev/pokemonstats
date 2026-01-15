'use client';

import { getTypeIcon } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { clsx } from 'clsx';
import React from 'react';
import { PokemonTypes } from '@/types/pokemon.types';
import { TYPE_LABELS } from '@/common/constants/pokemonTypes';
import { useTranslation } from '@/i18n';

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
  const { t } = useTranslation();
  const IconComponent = getTypeIcon(type);

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const typeLabel = t(`stats.types.${type}`, capitalize(type));

  return (
    <Badge
      className={clsx(
        'text-white border-white/30',
        TYPE_LABELS[type]?.background
      )}
    >
      <IconComponent />
      {!collapsed && typeLabel}
      {effectivenessLabel && <span>{effectivenessLabel}</span>}
    </Badge>
  );
}
