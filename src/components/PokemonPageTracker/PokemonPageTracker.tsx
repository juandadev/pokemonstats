'use client';

import { useEffect } from 'react';
import { track } from '@databuddy/sdk';
import { PokemonIndexItem } from '@/types/pokemon.types';
import { addToSearchHistory } from '@/lib/searchHistory';

interface PokemonPageTrackerProps {
  entry: PokemonIndexItem;
}

export default function PokemonPageTracker({ entry }: PokemonPageTrackerProps) {
  useEffect(() => {
    addToSearchHistory(entry);
    void track('pokemon_viewed', { pokemon: entry.slug });
  }, [entry]);

  return null;
}
