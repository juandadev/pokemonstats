import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clsx } from 'clsx';
import React from 'react';
import PokemonImage from '@/components/PokemonImage/PokemonImage';
import { Skeleton } from '@/components/ui/skeleton';
import { TYPE_LABELS } from '@/common/constants/pokemonTypes';

export default function EvolutionsCardSuspense() {
  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          Evolution Chain
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
            <div
              className={clsx(
                'w-12 h-12 rounded-full flex items-center justify-center overflow-hidden',
                TYPE_LABELS.normal?.gradientBackgroundLight
              )}
            >
              <PokemonImage
                artUrl={null}
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <Skeleton className="h-[24px] w-[100px]" />
              <Skeleton className="h-[20px] w-[100px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
