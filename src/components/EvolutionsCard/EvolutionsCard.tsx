'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clsx } from 'clsx';
import { TYPE_LABELS } from '@/common/constants';
import { displayEvolutionDetails } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Chain, PokemonEvolutionType } from '@/types/Pokemon.type';
import usePokemonData from '@/hooks/usePokemonData';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EvolutionsCard() {
  const { evolutionsData, pokemonData } = usePokemonData();

  const [showEvolutionDetails, setShowEvolutionDetails] =
    useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

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

  const handleEvolutionDetails = (pokemon: string) => {
    setShowEvolutionDetails((prevState) => !prevState);
    setSelectedPokemon(pokemon);
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
                <button
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200 cursor-pointer"
                  onClick={() => handleEvolutionDetails(evolution.name)}
                >
                  <InfoIcon className="w-3 h-3" />
                  <span className="inline">Details</span>
                </button>
              </div>
            ))}
        </div>
        <Sheet
          open={showEvolutionDetails}
          onOpenChange={setShowEvolutionDetails}
        >
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="capitalize">
                How to evolve into {selectedPokemon}
              </SheetTitle>
              <SheetDescription>
                Some evolutions needs more than just leveling up.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <p className="text-sm text-gray-500">
                Found something wrong, outdated, or missing?{' '}
                <a
                  href="https://github.com/juandadev/pokemonstats/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70"
                >
                  Report an issue here
                </a>{' '}
                so we can keep this info accurate for everyone 🙌
              </p>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
