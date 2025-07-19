import { useContext } from 'react';
import { pokemon } from '@/context';

export default function usePokemonData() {
  const { state } = useContext(pokemon);

  return {
    searchQuery: state.searchQuery,
    pokemonData: state.pokemon,
    evolutionsData: state.evolutions,
  };
}
