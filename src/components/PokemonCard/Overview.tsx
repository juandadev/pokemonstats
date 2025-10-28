'use client';

import React, { useState } from 'react';
import { clsx } from 'clsx';
import PokemonImage from '@/components/PokemonImage/PokemonImage';
import { PokemonData } from '@/types/pokemon.types';
import { TYPE_LABELS } from '@/common/constants/pokemonTypes';
import { Button } from '@/components/ui/button';
import { SparklesIcon } from 'lucide-react';

interface OverviewProps {
  pokemonData: PokemonData;
}

export default function Overview({ pokemonData }: OverviewProps) {
  const [isShiny, setIsShiny] = useState(false);

  const hasShinyImage =
    !!pokemonData.sprites?.other?.['official-artwork']?.front_shiny ||
    pokemonData.sprites?.front_shiny;
  const artUrl = isShiny
    ? pokemonData.sprites?.other?.['official-artwork']?.front_shiny ??
      pokemonData.sprites?.front_shiny ??
      null
    : pokemonData.sprites?.other?.['official-artwork']?.front_default ??
      pokemonData.sprites?.front_default ??
      null;

  const toggleShiny: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setIsShiny((prev) => !prev);
  };

  return (
    <div className="relative mt-4 flex justify-center">
      <div
        className={clsx(
          'relative w-48 h-48 rounded-full flex items-center justify-center shadow-inner',
          TYPE_LABELS[pokemonData.types[0]?.type.name]?.gradientBackgroundLight
        )}
      >
        {hasShinyImage && (
          <Button
            className="absolute top-0 right-0 bg-yellow-200 hover:bg-yellow-200"
            onClick={toggleShiny}
          >
            <SparklesIcon className="text-foreground" />
          </Button>
        )}
        <PokemonImage
          key={`${pokemonData.name}-pokemon-art-${
            isShiny ? 'shiny' : 'default'
          }`}
          artUrl={artUrl}
          alt={pokemonData.name}
          width={160}
          height={160}
          className="w-40 h-40"
          priority
        />
      </div>
    </div>
  );
}
