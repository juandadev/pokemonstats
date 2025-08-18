'use client';

import React, { useEffect, useState } from 'react';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import Image from 'next/image';
import { clsx } from 'clsx';
import { TYPE_LABELS } from '@/common/constants';
import { usePokemon } from '@/context';

export default function Header() {
  const [stickyHeaderVisible, setStickyHeaderVisible] = useState(false);

  const { pokemon } = usePokemon();

  useEffect(() => {
    const handleScroll = () => {
      const pokemonCard = document.getElementById('pokemon-card-header');

      if (pokemonCard) {
        const rect = pokemonCard.getBoundingClientRect();
        setStickyHeaderVisible(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!stickyHeaderVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-6xl">
        <div className="flex items-center gap-4">
          <div
            className={clsx(
              'w-12 h-12 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0',
              TYPE_LABELS[pokemon!.pokemonData.types[0]?.type.name]
                ?.gradientBackgroundLight
            )}
          >
            <Image
              src={pokemonImage}
              onError={pokemonImageFallback}
              alt={pokemonData.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-[1fr_78px] grid-rows-1">
              <div className="w-48">
                <h2 className="text-xl font-bold text-gray-900 capitalize whitespace-nowrap overflow-hidden text-ellipsis">
                  {pokemonData.name}
                </h2>
                <span className="text-sm font-medium text-gray-600">
                  #{pokemonData.id.toString().padStart(3, '0')}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-end justify-center">
                {pokemonData.types.map(({ type }) => (
                  <TypeBadge key={`type-${type.name}`} type={type.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
