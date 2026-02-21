'use client';

import { useEffect } from 'react';
import { PokemonIndexItem } from '@/types/pokemon.types';
import { addToSearchHistory } from '@/lib/searchHistory';

interface PokemonPageTrackerProps {
  entry: PokemonIndexItem;
}

export default function PokemonPageTracker({ entry }: PokemonPageTrackerProps) {
  useEffect(() => {
    addToSearchHistory(entry);
  }, [entry]);

  return null;
}
