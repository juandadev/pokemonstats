import { useContext } from 'react';
import { pokemon } from '@/context';
import { POKEMON_EXCEPTIONS } from '@/common/constants';
import { toPokeApiName } from '@/lib/utils';
import { EvolutionsData, PokemonData } from '@/types/Pokemon.type';

export default function usePokemonData() {
  const { state, dispatch } = useContext(pokemon);

  function setSearchQuery(input: string) {
    const getException = POKEMON_EXCEPTIONS.findIndex(
      ({ name }) => name === input
    );
    const isMegaEvolution = input.includes('Mega');

    dispatch({
      type: 'CHANGE_INPUT',
      payload:
        getException >= 0
          ? POKEMON_EXCEPTIONS[getException].id
          : isMegaEvolution
          ? toPokeApiName(input)
          : input,
    });
  }

  function setPokemonData({
    pokemon,
    evolutions,
  }: {
    pokemon?: PokemonData;
    evolutions?: EvolutionsData;
  }) {
    dispatch({
      type: 'SET_POKEMON_DATA',
      payload: {
        pokemon,
        evolutions,
      },
    });
  }

  return {
    searchQuery: state.searchQuery,
    pokemonData: state.pokemon,
    evolutionsData: state.evolutions,
    setSearchQuery,
    setPokemonData,
  };
}
