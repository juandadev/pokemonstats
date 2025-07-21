import { getTypeIcon } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { clsx } from 'clsx';
import { TYPE_LABELS } from '@/common/constants';
import React from 'react';
import { PokemonTypes } from '@/types/Pokemon.type';

interface TypeBadgeProps {
  type: PokemonTypes;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  const IconComponent = getTypeIcon(type);

  return (
    <Badge
      className={clsx(
        'text-white border-white/30',
        TYPE_LABELS[type]?.background
      )}
    >
      <IconComponent />
      {type}
    </Badge>
  );
}
