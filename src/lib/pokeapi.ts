import { CompletePokemonData, PokemonData } from '@/types/pokemon.types';
import { Species } from '@/types/species.types';
import { EvolutionChain } from '@/types/evolutions.types';

const BASE = 'https://pokeapi.co/api/v2';

export async function getPokemonDataBySlug(
  slug: string
): Promise<CompletePokemonData> {
  const name = slug.toLowerCase();

  const pokemonResponse = await fetch(`${BASE}/pokemon/${name}`, {
    cache: 'force-cache',
  });

  if (!pokemonResponse.ok) return {};

  const pokemonData: PokemonData = await pokemonResponse.json();
  const speciesResponse = await fetch(pokemonData.species.url, {
    cache: 'force-cache',
  });

  if (!speciesResponse.ok) return {};

  const speciesData: Species = await speciesResponse.json();

  if (!speciesData.evolution_chain) return {};

  const evolutionsResponse = await fetch(speciesData.evolution_chain.url, {
    cache: 'force-cache',
  });

  if (!evolutionsResponse.ok) return {};

  const evolutionsData: EvolutionChain = await evolutionsResponse.json();

  return { pokemonData, speciesData, evolutionsData };
}
