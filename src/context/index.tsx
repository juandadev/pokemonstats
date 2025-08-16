'use client';

import React, { createContext, useState } from 'react';
import { CompletePokemonData } from '@/types/pokemon.types';

type PokemonContextValue = {
  pokemon: CompletePokemonData | null;
  setPokemon: (p: CompletePokemonData | null) => void;
};

const PokemonContext = createContext<PokemonContextValue | undefined>(
  undefined
);

type ProviderProps = {
  initialPokemon: CompletePokemonData | null;
  children: React.ReactNode;
};

export function PokemonProvider({ initialPokemon, children }: ProviderProps) {
  const [pokemon, setPokemon] = useState(initialPokemon);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
