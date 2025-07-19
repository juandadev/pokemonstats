import { useContext } from 'react';
import { pokemon } from '@/context';
import { POKEMON_EXCEPTIONS } from '@/common/constants';
import { toPokeApiName } from '@/lib/utils';
import { EvolutionsData, PokemonData, Species } from '@/types/Pokemon.type';
import { toast } from 'sonner';

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

  async function updateSelectedPokemon(pokemonName: string): Promise<void> {
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      );

      if (!pokemonResponse.ok) {
        toast.error('Error fetching Pokémon data');
        return;
      }

      const pokemonData: PokemonData = await pokemonResponse.json();

      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`
      );

      if (!speciesResponse.ok) {
        toast.error('Error fetching Species data');
        return;
      }

      const speciesData: Species = await speciesResponse.json();

      if (!speciesData.evolution_chain) return;

      const evolutionsResponse = await fetch(speciesData.evolution_chain.url);

      if (!evolutionsResponse.ok) {
        toast.error('Error fetching Evolutions data');
        return;
      }

      const evolutionsData: EvolutionsData = await evolutionsResponse.json();

      dispatch({
        type: 'SET_POKEMON_DATA',
        payload: {
          pokemonImage: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonData.id
            .toString()
            .padStart(3, '0')}.png`,
          pokemon: pokemonData,
          evolutions: evolutionsData,
        },
      });
    } catch {
      toast.error('An unknown error has occurred');
    }
  }

  return {
    searchQuery: state.searchQuery,
    pokemonImage: state.pokemonImage,
    pokemonData: state.pokemon,
    evolutionsData: state.evolutions,
    setSearchQuery,
    updateSelectedPokemon,
  };
}
