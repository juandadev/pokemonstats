import Hero from '@/components/Hero/Hero';
import SearchBar from '@/components/SearchBar/SearchBar';
import React from 'react';
import PokemonCardSuspense from '@/components/PokemonCard/PokemonCardSuspense';
import EvolutionsCardSuspense from '@/components/EvolutionsCard/EvolutionsCardSuspense';
import EffectivenessChartSuspense from '@/components/EffectivenessChart/EffectivenessChartSuspense';

export default function Loading() {
  return (
    <>
      <Hero />
      <main id="main" className={'mt-10'}>
        <SearchBar initialValue={'Loading...'} />
        <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 w-full max-w-lg mx-auto">
            <PokemonCardSuspense />
            <EvolutionsCardSuspense />
          </div>
          <EffectivenessChartSuspense />
        </div>
      </main>
    </>
  );
}
