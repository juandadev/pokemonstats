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

  const defaultArtUrl =
    pokemonData.sprites?.other?.['official-artwork']?.front_default ??
    pokemonData.sprites?.front_default ??
    null;
  const shinyArtUrl =
    pokemonData.sprites?.other?.['official-artwork']?.front_shiny ??
    pokemonData.sprites?.front_shiny ??
    null;
  const hasShinyImage = !!shinyArtUrl;

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
            className={clsx(
              'absolute top-0 right-0 z-10 transition-[transform,background-color] duration-150 ease-(--ease-out-quint)',
              isShiny
                ? 'bg-yellow-400 hover:bg-yellow-500 scale-110'
                : 'bg-yellow-200 hover:bg-yellow-300 scale-100'
            )}
            onClick={toggleShiny}
            aria-pressed={isShiny}
            aria-label={isShiny ? 'Show normal sprite' : 'Show shiny sprite'}
          >
            <SparklesIcon className="text-foreground pointer-events-none" />
          </Button>
        )}
        <div className="relative w-40 h-40">
          <PokemonImage
            artUrl={defaultArtUrl}
            alt={pokemonData.name}
            width={160}
            height={160}
            className={clsx(
              'w-40 h-40 absolute inset-0 transition-opacity duration-200 ease-(--ease-out-quint)',
              isShiny ? 'opacity-0' : 'opacity-100'
            )}
            priority
          />
          <PokemonImage
            artUrl={shinyArtUrl}
            alt={`${pokemonData.name} shiny`}
            width={160}
            height={160}
            className={clsx(
              'w-40 h-40 absolute inset-0 transition-opacity duration-200 ease-(--ease-out-quint)',
              isShiny ? 'opacity-100' : 'opacity-0'
            )}
          />
        </div>
      </div>
    </div>
  );
}
