'use client';

import React, { createContext, ReactNode, useReducer } from 'react';
import { EvolutionsData, PokemonData } from '@/types/Pokemon.type';

type StateType = {
  searchQuery: string | number;
  pokemonImage: string;
  pokemon: PokemonData | Record<string, never>;
  evolutions: EvolutionsData | Record<string, never>;
};

type ActionType =
  | {
      type: 'CHANGE_INPUT';
      payload: string | number;
    }
  | {
      type: 'SET_POKEMON_DATA';
      payload: {
        pokemonImage?: string;
        pokemon?: PokemonData;
        evolutions?: EvolutionsData;
      };
    };

const initialState: StateType = {
  pokemonImage: '',
  searchQuery: 'Totodile',
  pokemon: {},
  evolutions: {},
};

const pokemon = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});
const { Provider } = pokemon;

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        searchQuery:
          typeof action.payload === 'string'
            ? action.payload.toLowerCase().replaceAll(/[\s.]+/g, '-')
            : action.payload,
      };

    case 'SET_POKEMON_DATA': {
      return {
        ...state,
        pokemonImage: action.payload.pokemonImage || state.pokemonImage,
        pokemon: action.payload.pokemon || state.pokemon,
        evolutions: action.payload.evolutions || state.evolutions,
      };
    }

    default:
      return state;
  }
}

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { pokemon, ContextProvider };
