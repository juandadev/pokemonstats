import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TYPE_LABELS } from '@/common/constants';
import { clsx } from 'clsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PokemonImage from '@/components/PokemonImage/PokemonImage';
import { Skeleton } from '@/components/ui/skeleton';

export default function PokemonCardSuspense() {
  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden pt-0">
      <div
        id="pokemon-card-header"
        className={clsx(
          'water-gradient p-6 text-white',
          TYPE_LABELS.normal?.gradientBackground
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-[20px] w-[42]" />
          <div className={'flex gap-2'}>
            <Skeleton className="h-[22px] w-[73px]" />
          </div>
        </div>
        <Skeleton className="h-[36px] w-[180px]" />
      </div>
      <CardContent className="px-6">
        <div className="flex justify-center">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stats">Base Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="relative mt-4 flex justify-center">
                <div
                  className={clsx(
                    'w-48 h-48 rounded-full flex items-center justify-center shadow-inner',
                    TYPE_LABELS.normal?.gradientBackgroundLight
                  )}
                >
                  <PokemonImage
                    artUrl={null}
                    alt=""
                    width={160}
                    height={160}
                    className={'w-40 h-40 '}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}
