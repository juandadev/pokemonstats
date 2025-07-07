import React from 'react';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import EffectivenessChart from '@/components/EffectivenessChart/EffectivenessChart';

export default function Home() {
  return (
    <main id="main" className={'mt-10'}>
      <SearchBar />
      <div className={'grid lg:grid-cols-2 gap-8'}>
        <PokemonCard />
        <EffectivenessChart />
      </div>
    </main>
  );
}
