import React from 'react';
import { getPokemonDataBySlug } from '@/lib/pokeapi';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import SearchBar from '@/components/SearchBar/SearchBar';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import EvolutionsCard from '@/components/EvolutionsCard/EvolutionsCard';
import EffectivenessChart from '@/components/EffectivenessChart/EffectivenessChart';
import { buildEvolutionStageList } from '@/lib/evolution-stages';
import { buildMoveList } from '@/lib/move-list';
import { getPokemonDisplayName } from '@/lib/pokemonDisplayName';
import { keywordsForPokemon, titleCase } from '@/lib/utils';
import { SITE_URL } from '@/common/constants';

export async function generateStaticParams(): Promise<
  Array<{ pokemon: string }>
> {
  return [{ pokemon: 'totodile' }];
}

export const dynamicParams = true;
export const revalidate = false;
export const dynamic = 'force-static';

type PageProps = { params: Promise<{ pokemon: string }> };

const TWITTER_HANDLE = '@juandadotdev';

export async function generateMetadata({ params }: PageProps) {
  const { pokemon } = await params;
  const data = await getPokemonDataBySlug(pokemon);

  if (!data.pokemonData || !data.speciesData) {
    notFound();
  }

  const name = getPokemonDisplayName(data.pokemonData.name);
  const types = data.pokemonData.types.map((type) => type.type.name);
  const description = `${name} – quickly check visuals, weaknesses, type matchups, and evolution chain. View ${name}'s ${types.join(
    ' / '
  )} strengths & resistances, plus images and special forms without the wiki rabbit hole.`;
  const canonicalUrl = `${SITE_URL}/${data.pokemonData.name}`;
  const ogImage =
    data.pokemonData.sprites.other?.['official-artwork'].front_default ||
    data.pokemonData.sprites.front_default ||
    `${SITE_URL}/favicon.ico`;
  const keywords = keywordsForPokemon(name, types, data.speciesData.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${name} – Type Weaknesses & Evolution | Pokémon Stats`,
    url: canonicalUrl,
    description: description,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Pokémon Stats',
      url: SITE_URL,
    },
    author: {
      '@type': 'Person',
      name: 'Juan Daniel Martinez',
    },
    about: {
      '@type': 'Thing',
      name,
      alternateName: data.pokemonData.name,
      additionalType: types.map(
        (t) => `https://schema.org/${titleCase(t)}Type`
      ),
      identifier: `National Dex #${data.speciesData.id
        .toString()
        .padStart(4, '0')}`,
      image: ogImage,
    },
    primaryImageOfPage: ogImage,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: name,
          item: canonicalUrl,
        },
      ],
    },
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: `${name} – Type Weaknesses & Evolutions | Pokémon Stats`,
    description: description,
    keywords,
    alternates: {
      canonicalUrl,
      // TODO: for i18n later, include: languages: { 'es-MX': `${SITE_URL}/es/${pokemon}` }
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'Pokémon Stats',
      title: `${name} – Type Weaknesses & Evolutions`,
      description: description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} – Pokémon Stats`,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: `${name} – Type Weaknesses & Evolutions`,
      description: description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: 'large',
        maxVideoPreview: -1,
      },
    },
    // TODO: when publish a PWA manifest, uncomment:
    // manifest: '/site.webmanifest',
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

export default async function PokemonStats({ params }: PageProps) {
  const { pokemon } = await params;
  const data = await getPokemonDataBySlug(pokemon);

  if (!data || Object.keys(data.pokemonData || {}).length === 0) notFound();

  const evolutionStages = await buildEvolutionStageList(data.evolutionsData!);
  const moveList = await buildMoveList(data.pokemonData!.moves);

  return (
    <>
      <Header pokemonData={data.pokemonData!} speciesData={data.speciesData!} />
      <Hero />
      <main id="main" className={'mt-10'}>
        <SearchBar initialValue={pokemon} />
        <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 w-full mx-auto">
            <PokemonCard
              pokemonData={data.pokemonData!}
              speciesData={data.speciesData!}
              moveList={moveList}
            />
            <EvolutionsCard
              pokemonData={data.pokemonData!}
              evolutionsData={evolutionStages}
            />
          </div>
          <EffectivenessChart pokemonData={data.pokemonData!} />
        </div>
      </main>
    </>
  );
}
