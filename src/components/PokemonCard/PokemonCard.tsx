'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TYPE_LABELS } from '@/common/constants';
import { clsx } from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import usePokemonData from '@/hooks/usePokemonData';

export default function PokemonCard() {
  const { pokemonImage, pokemonData, updateSelectedPokemon } = usePokemonData();

  const isMounted = useRef(false);

  // const switch3d = (
  //   id: number,
  //   name: string,
  //   setPath: React.Dispatch<React.SetStateAction<string>>,
  //   toggle: boolean[],
  //   setToggle: React.Dispatch<React.SetStateAction<boolean[]>>
  // ) => {
  //   if (toggle[0]) {
  //     setPath(`https://projectpokemon.org/images/normal-sprite/${name}.gif`);
  //   } else {
  //     setPath(
  //       `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
  //         .toString()
  //         .padStart(3, '0')}.png`
  //     );
  //   }
  //
  //   setToggle((state) => [!state[0], true]);
  // };

  // const switch2d = (
  //   id: number,
  //   name: string,
  //   setPath: React.Dispatch<React.SetStateAction<string>>,
  //   toggle: boolean[],
  //   setToggle: React.Dispatch<React.SetStateAction<boolean[]>>
  // ) => {
  //   if (toggle[1]) {
  //     setPath(name);
  //   } else {
  //     setPath(
  //       `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
  //         .toString()
  //         .padStart(3, '0')}.png`
  //     );
  //   }
  //
  //   setToggle((state) => [true, !state[1]]);
  // };

  // const handleError = () => {
  //   const { sprites } = pokemon;
  //
  //   setImagePath(
  //     sprites.front_default ||
  //       'https://i.ebayimg.com/images/g/q8AAAOSwhvpeEZBn/s-l300.png'
  //   );
  //
  //   setLoading(false);
  // };
  //
  // const handleLoading = () => {
  //   setLoading(false);
  // };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      updateSelectedPokemon('totodile');
    }
  }, [updateSelectedPokemon]);

  if (Object.keys(pokemonData).length === 0) return null;

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden pt-0">
      <div
        className={clsx(
          'water-gradient p-6 text-white',
          TYPE_LABELS[pokemonData.types[0]?.type.name]?.gradientBackground
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium opacity-90">
            #{pokemonData.id.toString().padStart(3, '0')}
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
          {pokemonData.name}
        </h2>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className={clsx(
                'w-48 h-48 rounded-full flex items-center justify-center shadow-inner',
                TYPE_LABELS[pokemonData.types[0]?.type.name]
                  ?.gradientBackgroundLight
              )}
            >
              <img
                src={pokemonImage}
                alt={pokemonData.name}
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
