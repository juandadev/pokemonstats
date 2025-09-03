import { clsx } from 'clsx';
import PokemonImage from '@/components/PokemonImage/PokemonImage';
import React from 'react';
import { PokemonData } from '@/types/pokemon.types';
import { TYPE_LABELS } from '@/common/constants/pokemonTypes';

interface OverviewProps {
  pokemonData: PokemonData;
}

export default function Overview({ pokemonData }: OverviewProps) {
  return (
    <div className="relative mt-4 flex justify-center">
      <div
        className={clsx(
          'w-48 h-48 rounded-full flex items-center justify-center shadow-inner',
          TYPE_LABELS[pokemonData.types[0]?.type.name]?.gradientBackgroundLight
        )}
      >
        <PokemonImage
          artUrl={
            pokemonData.sprites?.other?.['official-artwork']?.front_default ??
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
  );
}
