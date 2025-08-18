import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TYPE_LABELS } from '@/common/constants';
import { clsx } from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatStatName, getStatColor } from '@/lib/utils';
import { PokemonData } from '@/types/pokemon.types';
import { Species } from '@/types/species.types';
import PokemonImage from '@/components/PokemonImage/PokemonImage';
import { getPokemonDisplayName } from '@/lib/pokemonDisplayName';

interface PokemonCardProps {
  pokemonData: PokemonData;
  speciesData: Species;
}

export default function PokemonCard({
  pokemonData,
  speciesData,
}: PokemonCardProps) {
  const displayName = getPokemonDisplayName(pokemonData.name);

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
                    TYPE_LABELS[pokemonData.types[0]?.type.name]
                      ?.gradientBackgroundLight
                  )}
                >
                  <PokemonImage
                    artUrl={
                      pokemonData.sprites?.other?.['official-artwork']
                        ?.front_default ??
                      pokemonData.sprites?.front_default ??
                      null
                    }
                    alt={pokemonData.name}
                    width={160}
                    height={160}
                    className={'w-40 h-40 '}
                    priority
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="stats">
              <div className="space-y-4">
                {pokemonData.stats.map((statData, index) => {
                  const statName = statData.stat.name;
                  const baseStat = statData.base_stat;
                  const maxStat = 255;
                  const percentage = (baseStat / maxStat) * 100;

                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium text-gray-700 text-right">
                        {formatStatName(statName)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: `${Math.min(percentage, 100)}%`,
                                backgroundColor: getStatColor(statName),
                              }}
                            />
                          </div>
                          <div className="w-8 text-sm font-semibold text-gray-900 text-right">
                            {baseStat}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Total Stats */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm font-semibold text-gray-900 text-right">
                      Total
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex-1"></div>
                        <div className="w-8 text-sm font-bold text-gray-900 text-right">
                          {pokemonData.stats.reduce(
                            (total, stat) => total + stat.base_stat,
                            0
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}
