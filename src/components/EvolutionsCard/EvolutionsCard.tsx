'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clsx } from 'clsx';
import { TYPE_LABELS } from '@/common/constants';
import { getEvolutionDetails } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import React, { Fragment, useMemo, useState } from 'react';
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
import EvolutionDetails from '@/components/EvolutionsCard/EvolutionDetails';
import { EVOLUTION_DETAILS } from '@/common/constants/evolutions';
import {
  EvolutionCardData,
  EvolutionDetails as EvolutionDetail,
} from '@/types/evolutions.types';
import { PokemonData } from '@/types/pokemon.types';
import { Separator } from '@/components/ui/separator';
import PokemonImage from '@/components/PokemonImage/PokemonImage';

interface EvolutionsCardProps {
  pokemonData: PokemonData;
  evolutionsData: EvolutionCardData[][];
}

export default function EvolutionsCard({
  pokemonData,
  evolutionsData,
}: EvolutionsCardProps) {
  const [showEvolutionDetails, setShowEvolutionDetails] =
    useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<{
    spriteUrl: string;
    displayName: string;
  }>({ spriteUrl: '', displayName: '' });
  const [evolutionDetails, setEvolutionDetails] = useState<
    Partial<EvolutionDetail>[]
  >([]);

  const handleEvolutionDetails = (
    pokemon: EvolutionCardData,
    details: Partial<EvolutionDetail>[]
  ) => {
    setShowEvolutionDetails((prevState) => !prevState);
    setSelectedPokemon({
      spriteUrl: pokemon.spriteUrl!,
      displayName: pokemon.displayName,
    });
    setEvolutionDetails(details);
  };

  const renderEvolutionChain = useMemo(
    () =>
      evolutionsData.map((stage, stageIndex) => {
        return (
          <Fragment key={`${pokemonData.name}-evolution-stage-${stageIndex}`}>
            {stage.map((evolution, evolutionIndex) => {
              const evolutionDetails = getEvolutionDetails(
                evolution.evolutionDetails
              );
              const shouldDisplayDetails = stageIndex !== 0;

              return (
                <div
                  key={`${pokemonData.name}-stage-${stageIndex}-evo-${evolutionIndex}`}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
                >
                  <div
                    className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center overflow-hidden',
                      TYPE_LABELS[pokemonData.types[0]?.type.name]
                        ?.gradientBackgroundLight
                    )}
                  >
                    <PokemonImage
                      artUrl={evolution.spriteUrl}
                      alt={`${evolution.displayName} sprite`}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold capitalize">
                      {evolution.displayName}
                    </div>
                    <div className="text-sm text-gray-600">
                      {evolutionDetails[0].trigger?.name === 'level-up' &&
                      evolutionDetails[0].min_level
                        ? `Level ${evolution.evolutionDetails?.[0].min_level}`
                        : EVOLUTION_DETAILS(
                            evolutionDetails[0].trigger?.name || 'default'
                          ).trigger.label}
                    </div>
                  </div>
                  {shouldDisplayDetails && (
                    <button
                      className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200 cursor-pointer"
                      onClick={() =>
                        handleEvolutionDetails(evolution, evolutionDetails)
                      }
                    >
                      <InfoIcon className="w-3 h-3" />
                      <span className="inline">Details</span>
                    </button>
                  )}
                </div>
              );
            })}
            {stageIndex < evolutionsData.length - 1 && <Separator />}
          </Fragment>
        );
      }),
    [evolutionsData, pokemonData.name, pokemonData.types]
  );

  if (Object.keys(evolutionsData).length === 0) return null;

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          Evolution Chain
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">{renderEvolutionChain}</div>
        <Sheet
          open={showEvolutionDetails}
          onOpenChange={setShowEvolutionDetails}
        >
          <SheetContent>
            <SheetHeader>
              <div className="flex gap-2 items-center">
                <div
                  className={clsx(
                    'w-12 h-12 rounded-full flex items-center justify-center overflow-hidden',
                    TYPE_LABELS[pokemonData.types[0]?.type.name]
                      ?.gradientBackgroundLight
                  )}
                >
                  <PokemonImage
                    artUrl={selectedPokemon.spriteUrl}
                    alt={`${selectedPokemon.displayName} sprite`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <SheetTitle className="capitalize">
                  How to evolve into {selectedPokemon.displayName}
                </SheetTitle>
              </div>
              <SheetDescription>
                Different methods available across games
              </SheetDescription>
            </SheetHeader>
            <EvolutionDetails
              pokemonName={selectedPokemon.displayName || ''}
              details={evolutionDetails}
            />
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
