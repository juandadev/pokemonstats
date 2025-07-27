import React from 'react';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import EffectivenessChart from '@/components/EffectivenessChart/EffectivenessChart';
import EvolutionsCard from '@/components/EvolutionsCard/EvolutionsCard';

export default function Home() {
  return (
    <main id="main" className={'mt-10'}>
      <SearchBar />
      <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 w-full max-w-lg mx-auto">
          <PokemonCard />
          <EvolutionsCard />
        </div>
        <EffectivenessChart />
      </div>
    </main>
  );
}
