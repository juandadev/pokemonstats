import { PokemonData } from '@/types/pokemon.types';
import { Species } from '@/types/species.types';
import { EvolutionChain } from '@/types/evolutions.types';

const BASE = 'https://pokeapi.co/api/v2';

interface CompletePokemonData {
  pokemonData: PokemonData;
  evolutionsData: EvolutionChain;
  speciesData: Species;
}

export async function getPokemonDataBySlug(
  slug: string
): Promise<CompletePokemonData | Record<never, never>> {
  const name = slug.toLowerCase();

  const res = await fetch(`${BASE}/pokemon/${name}`);

  if (!res.ok) return { pokemonData: {}, evolutionsData: {}, speciesData: {} };

  return (await res.json()) as CompletePokemonData;
}
