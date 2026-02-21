import { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import SearchBar from '@/components/SearchBar/SearchBar';
import { SITE_URL } from '@/common/constants';

const TITLE = 'Pokémon Stats – Type Weaknesses, Evolutions & Pokédex';
const DESCRIPTION =
  'Your quick Pokédex companion. Instantly check type weaknesses, resistances, evolution chains, and base stats for all 1,000+ Pokémon. Fast, clean, and mobile-friendly.';
const KEYWORDS = [
  'pokédex',
  'pokémon',
  'type weaknesses',
  'type chart',
  'type matchup',
  'evolution chain',
  'base stats',
  'pokémon weakness calculator',
  'pokémon type effectiveness',
  'pokémon stats',
  'pokémon game',
  'national pokédex',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Pokémon Stats',
    title: 'Pokémon Stats – Type Weaknesses, Evolutions & Pokédex',
    description: DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pokémon Stats – Your quick Pokédex companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@juandadotdev',
    creator: '@juandadotdev',
    title: 'Pokémon Stats – Type Weaknesses, Evolutions & Pokédex',
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Pokémon Stats',
      url: SITE_URL,
      description: DESCRIPTION,
      inLanguage: 'en',
      author: {
        '@type': 'Person',
        name: 'Juan Daniel Martinez',
        url: 'https://github.com/juandadev',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/{pokemon}`,
        },
        'query-input': 'required name=pokemon',
      },
    }),
  },
};

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <Hero />
      <main id="main">
        <SearchBar />
      </main>
    </div>
  );
}
