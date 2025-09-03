import {
  ArrowLeft,
  Coffee,
  ExternalLink,
  Github,
  Heart,
  Lightbulb,
  Palette,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import CoffeeSupporters from '@/components/CoffeeSupporters/CoffeeSupporters';
import GithubContributors from '@/components/GithubContributors/GithubContributors';
import { INSPIRATIONS, SITE_URL, TOOLS } from '@/common/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Thanks & Credits | Pokémon Stats',
  description:
    'A heartfelt thanks to our supporters, contributors, and the amazing tools and projects that inspired Pokémon Stats. View Buy Me a Coffee supporters, GitHub contributors, and credits to PokéAPI, Pokémon Palette, and more.',
  alternates: {
    canonical: `${SITE_URL}/thanks`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/thanks`,
    siteName: 'Pokémon Stats',
    title: 'Thanks & Credits | Pokémon Stats',
    description:
      'Supporters, contributors, and the tools that power Pokémon Stats: from PokéAPI to Pokémon Palette. Huge thanks to everyone who makes this project possible.',
    // TODO: Uncomment below to enable OG image generation
    // images: [
    //   {
    //     url: `${SITE_URL}/api/og?route=thanks`,
    //     width: 1200,
    //     height: 630,
    //     alt: 'Thanks & Credits – Pokémon Stats',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thanks & Credits | Pokémon Stats',
    description:
      'Buy Me a Coffee supporters, GitHub contributors, and credits to PokéAPI, Pokémon Palette, and more.',
    // images: [`${SITE_URL}/api/og?route=thanks`],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  keywords: [
    'pokemon stats thanks',
    'pokemon stats credits',
    'pokemon stats contributors',
    'buy me a coffee supporters',
    'pokemon stats tech stack',
    'pokemon stats acknowledgments',
  ],
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Thanks & Credits | Pokémon Stats',
      url: `${SITE_URL}/thanks`,
      description:
        'Acknowledgments for Pokémon Stats: supporters, contributors, and projects that inspired this app.',
      about: [
        {
          '@type': 'WebSite',
          name: 'PokéAPI',
          url: 'https://pokeapi.co/',
        },
        {
          '@type': 'WebSite',
          name: 'Pokémon Palette',
          url: 'https://pokemonpalette.com',
        },
        {
          '@type': 'WebSite',
          name: 'PKMN.help',
          url: 'https://www.pkmn.help/defense/',
        },
      ],
      isPartOf: {
        '@type': 'WebSite',
        name: 'Pokémon Stats',
        url: SITE_URL,
      },
    }),
  },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Pokemon Stats</span>
          </Link>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Special Thanks
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pokemon Stats wouldn&apos;t be possible without the amazing
            community, contributors, and the incredible tools and resources that
            inspire us every day.
          </p>
        </div>
        <CoffeeSupporters />
        <GithubContributors />
        {/* Inspirations Section */}
        <Card className="mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Inspirations & References
            </CardTitle>
            <p className="text-gray-600">
              Incredible projects and resources that inspired Pokemon Stats and
              helped shape our vision.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INSPIRATIONS.map((inspiration, index) => (
                <a
                  key={index}
                  href={inspiration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 hover:shadow-md transition-all duration-200 hover:scale-105 group"
                >
                  <div className="text-2xl">{inspiration.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors duration-200">
                        {inspiration.name}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-yellow-600 transition-colors duration-200" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {inspiration.description}
                    </p>
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                      {inspiration.category}
                    </Badge>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Tools & Technologies Section */}
        <Card className="mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-purple-500" />
              Tools & Technologies
            </CardTitle>
            <p className="text-gray-600">
              Amazing tools and technologies that make Pokemon Stats possible.
              Thank you to all the open-source maintainers!
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOOLS.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-200 hover:scale-105 group"
                >
                  <div className="text-xl">{tool.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-200 truncate">
                        {tool.name}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-purple-600 transition-colors duration-200 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {tool.description}
                    </p>
                    <Badge className="bg-purple-100 text-purple-800 text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Call to Action */}
        <Card className="shadow-xl bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur-sm border border-pink-200">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Be Featured Here?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                There are many ways to support Pokemon Stats and join our
                amazing community of contributors and supporters.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-pink-200">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Contribute Code
                  </div>
                  <div className="text-xs text-gray-600">
                    Help build new features
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl mb-2">☕</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Buy Me a Coffee
                  </div>
                  <div className="text-xs text-gray-600">
                    Support development
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Star on GitHub
                  </div>
                  <div className="text-xs text-gray-600">
                    Show your appreciation
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a
                    href="https://github.com/juandadev/pokemonstats"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Contribute on GitHub
                  </a>
                </Button>
                <Button
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a
                    href="https://buymeacoffee.com/juandadotdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    Buy Me a Coffee
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Footer Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl"
            asChild
          >
            <Link href="/">Back to Pokemon Stats</Link>
          </Button>
          <Button
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl"
            asChild
          >
            <Link href="/roadmap">View Project Roadmap</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
