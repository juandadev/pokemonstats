'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TYPE_LABELS } from '@/common/constants';
import { clsx } from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PokemonData } from '@/types/pokemon.types';
import { Species } from '@/types/species.types';
import { getPokemonDisplayName } from '@/lib/pokemonDisplayName';
import Stats from '@/components/PokemonCard/Stats';
import Overview from '@/components/PokemonCard/Overview';
import Moves from '@/components/PokemonCard/Moves';
import { MoveDisplayData } from '@/types/moves.types';
import { getPreferences, setPreferences } from '@/lib/preferences';
import { PokemonCardTabs } from '@/types';

interface PokemonCardProps {
  pokemonData: PokemonData;
  speciesData: Species;
  moveList: MoveDisplayData[];
}

export default function PokemonCard({
  pokemonData,
  speciesData,
  moveList,
}: PokemonCardProps) {
  const preferences = getPreferences();
  const [activeTab, setActiveTab] = useState<PokemonCardTabs>(
    preferences.pkmnTab
  );

  const displayName = getPokemonDisplayName(pokemonData.name);

  const handleTabChange = (value: string) => {
    setActiveTab(value as PokemonCardTabs);
    setPreferences({ pkmnTab: value as PokemonCardTabs });
  };

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden pt-0">
      <div
        id="pokemon-card-header"
        className={clsx(
          'water-gradient p-6 text-white',
          TYPE_LABELS[pokemonData.types[0].type.name]?.gradientBackground
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium opacity-90">
            #{speciesData.id.toString().padStart(4, '0')}
          </span>
          <div className={'flex gap-2'}>
            {pokemonData.types.map(({ type }) => (
              <TypeBadge key={`type-${type.name}`} type={type.name} />
            ))}
          </div>
        </div>
        <h2
          className={clsx(
            'text-3xl font-bold mb-4 capitalize',
            TYPE_LABELS[pokemonData.types[0]?.type.name]?.text
          )}
        >
          {displayName}
        </h2>
      </div>
      <CardContent className="px-6">
        <div className="flex justify-center">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stats">Base Stats</TabsTrigger>
              <TabsTrigger value="moves">Moves</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Overview pokemonData={pokemonData} />
            </TabsContent>
            <TabsContent value="stats">
              <Stats stats={pokemonData.stats} />
            </TabsContent>
            <TabsContent value="moves">
              <Moves moves={moveList} />
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}
