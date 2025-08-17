import React from 'react';
import { getPokemonDataBySlug } from '@/lib/pokeapi';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import SearchBar from '@/components/SearchBar/SearchBar';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import EvolutionsCard from '@/components/EvolutionsCard/EvolutionsCard';
import EffectivenessChart from '@/components/EffectivenessChart/EffectivenessChart';

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

  if (!data || Object.keys(data.pokemonData || {}).length === 0) notFound();

  return (
    <>
      {/*<Header />*/}
      <Hero />
      <main id="main" className={'mt-10'}>
        {/*<SearchBar />*/}
        <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 w-full max-w-lg mx-auto">
            <PokemonCard
              pokemonData={data.pokemonData!}
              speciesData={data.speciesData!}
            />
            <EvolutionsCard
              pokemonData={data.pokemonData!}
              evolutionsData={data.evolutionsData!}
            />
          </div>
          {/*<EffectivenessChart />*/}
        </div>
      </main>
    </>
  );
}
