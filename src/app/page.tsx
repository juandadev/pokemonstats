import Hero from '@/components/Hero/Hero';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function HomePage() {
  return (
    <div className="h-dvh">
      <Hero />
      <main id="main">
        <SearchBar />
      </main>
    </div>
  );
}
