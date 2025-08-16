import React from 'react';
import Home from '@/views/Home';
import { getPokemonDataBySlug } from '@/lib/pokeapi';
import { notFound } from 'next/navigation';
import { PokemonProvider } from '@/context';

export async function generateStaticParams(): Promise<
  Array<{ pokemon: string }>
> {
  return [{ pokemon: 'totodile' }];
}

export const dynamicParams = true;
export const revalidate = false;

type PageProps = { params: Promise<{ pokemon: string }> };

export default async function PokemonStats({ params }: PageProps) {
  const { pokemon } = await params;
  const data = await getPokemonDataBySlug(pokemon);

  if (!data || Object.keys(data.pokemonData).length === 0) notFound();

  return (
    <PokemonProvider initialPokemon={data}>
      <Home />
    </PokemonProvider>
  );
}
