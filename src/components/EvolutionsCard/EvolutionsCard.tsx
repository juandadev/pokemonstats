'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clsx } from 'clsx';
import { TYPE_LABELS } from '@/common/constants';
import { displayEvolutionDetails } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import React from 'react';
import { Chain, PokemonEvolutionType } from '@/types/Pokemon.type';
import usePokemonData from '@/hooks/usePokemonData';
import Image from 'next/image';

export default function EvolutionsCard() {
  const { evolutionsData, pokemonData } = usePokemonData();

  const evolutionChain = (pokemonChain: Chain) => {
    const evolutions: PokemonEvolutionType[] = [];

    if (pokemonChain) {
      const { species, evolves_to, evolution_details } = pokemonChain;

      evolutions.push({
        name: species.name,
        evolutionDetails: evolution_details?.[0],
      });

      if (evolves_to.length) {
        evolves_to.forEach((evolve) => {
          const subEvolutions = evolutionChain(evolve);
          evolutions.push(...subEvolutions);
        });
      }
    }

    return evolutions;
  };

  if (Object.keys(evolutionsData).length === 0) return null;

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          Evolution Chain
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {evolutionsData.chain &&
            evolutionChain(evolutionsData.chain)?.map((evolution, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
              >
                <div
                  className={clsx(
                    'w-12 h-12 rounded-full flex items-center justify-center overflow-hidden',
                    TYPE_LABELS[pokemonData.types[0]?.type.name]
                      ?.gradientBackgroundLight
                  )}
                >
                  <Image
                    unoptimized
                    width={40}
                    height={40}
                    src={`https://projectpokemon.org/images/normal-sprite/${evolution.name}.gif`}
                    alt={evolution.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold capitalize">
                    {evolution.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {displayEvolutionDetails(
                      evolution.name,
                      evolution.evolutionDetails
                    )}
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="h-4 w-4 text-blue-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Special evolution requirements</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
