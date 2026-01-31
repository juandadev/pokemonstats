import { CompletePokemonData, PokemonData } from '@/types/pokemon.types';
import { Species } from '@/types/species.types';
import { EvolutionChain } from '@/types/evolutions.types';
import {
  CUSTOM_EVOLUTION_CHAINS,
  MISSING_SPRITE_LIST,
} from '@/common/constants';

const BASE = 'https://pokeapi.co/api/v2';

export async function getPokemonDataBySlug(
  slug: string
): Promise<CompletePokemonData> {
  const name = slug.toLowerCase();

  const pokemonResponse = await fetch(`${BASE}/pokemon/${name}`, {
    cache: 'force-cache',
  });

  if (!pokemonResponse.ok) return {};

  let pokemonData: PokemonData = await pokemonResponse.json();
  if (
    MISSING_SPRITE_LIST.has(pokemonData.name) &&
    !pokemonData.sprites.other?.['official-artwork'].front_default
  ) {
    pokemonData = {
      ...pokemonData,
      sprites: {
        front_default: MISSING_SPRITE_LIST.get(pokemonData.name)!,
        front_shiny: '',
      },
    };
  }

  const speciesResponse = await fetch(pokemonData.species.url, {
    cache: 'force-cache',
  });

  if (!speciesResponse.ok) return {};

  const speciesData: Species = await speciesResponse.json();

  if (!speciesData.evolution_chain) return {};

  let evolutionsData: EvolutionChain;

  if (CUSTOM_EVOLUTION_CHAINS[speciesData.name]) {
    evolutionsData = CUSTOM_EVOLUTION_CHAINS[speciesData.name];
  } else {
    const evolutionsResponse = await fetch(speciesData.evolution_chain.url, {
      cache: 'force-cache',
    });

    if (!evolutionsResponse.ok) return {};

    evolutionsData = await evolutionsResponse.json();
  }

  return { pokemonData, speciesData, evolutionsData };
}

export async function getEvolutionDetails(
  name: string
): Promise<PokemonData | null> {
  const response = await fetch(`${BASE}/pokemon/${name}`, {
    cache: 'force-cache',
  });

  if (!response.ok) return null;

  let pokemonData: PokemonData = await response.json();
  if (
    MISSING_SPRITE_LIST.has(pokemonData.name) &&
    !pokemonData.sprites.other?.['official-artwork'].front_default
  ) {
    pokemonData = {
      ...pokemonData,
      sprites: {
        front_default: MISSING_SPRITE_LIST.get(pokemonData.name)!,
        front_shiny: '',
      },
    };
  }

  return pokemonData;
}
