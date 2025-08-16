import { PokemonData } from '@/types/pokemon.types';
import { Species } from '@/types/species.types';
import { EvolutionChain } from '@/types/evolutions.types';

const BASE = 'https://pokeapi.co/api/v2';

interface CompletePokemonData {
  pokemonData: PokemonData;
  speciesData: Species;
  evolutionsData: EvolutionChain;
}

export async function getPokemonDataBySlug(
  slug: string
): Promise<CompletePokemonData | Record<never, never>> {
  const name = slug.toLowerCase();

  const pokemonResponse = await fetch(`${BASE}/pokemon/${name}`);

  if (!pokemonResponse.ok)
    return { pokemonData: {}, evolutionsData: {}, speciesData: {} };

  const pokemonData: PokemonData = await pokemonResponse.json();
  const speciesResponse = await fetch(pokemonData.species.url);

  if (!speciesResponse.ok)
    return { pokemonData: {}, evolutionsData: {}, speciesData: {} };

  const speciesData: Species = await speciesResponse.json();

  if (!speciesData.evolution_chain)
    return { pokemonData: {}, evolutionsData: {}, speciesData: {} };

  const evolutionsResponse = await fetch(speciesData.evolution_chain.url);

  if (!evolutionsResponse.ok)
    return { pokemonData: {}, evolutionsData: {}, speciesData: {} };

  const evolutionsData: EvolutionChain = await evolutionsResponse.json();

  return { pokemonData, speciesData, evolutionsData };
}
