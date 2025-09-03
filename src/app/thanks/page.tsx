'use client';

import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Heart,
  Coffee,
  Github,
  Users,
  ExternalLink,
  Code,
  Palette,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const inspirations = [
  {
    name: 'PokéAPI',
    description:
      'The comprehensive Pokémon data API that powers our application',
    url: 'https://pokeapi.co/',
    category: 'Data Source',
    icon: '🔗',
  },
  {
    name: 'Pokémon Palette',
    description: 'Inspiration for our color scheme and design aesthetic',
    url: 'https://www.pokemonpalette.com/',
    category: 'Design Inspiration',
    icon: '🎨',
  },
  {
    name: 'Pokémon Type Calculator',
    description: 'The type effectiveness calculator that inspired our tool',
    url: 'https://www.pkmn.help/defense/',
    category: 'Reference',
    icon: '🛡️',
  },
];

const tools = [
  {
    name: 'Next.js 15',
    description: 'React framework we use for fast, and static Pokémon pages',
    url: 'https://nextjs.org/',
    category: 'Framework',
    icon: '▲',
  },
  {
    name: 'React 19',
    description:
      'Modern React with the latest features powering the whole experience',
    url: 'https://react.dev/',
    category: 'Library',
    icon: '⚛️',
  },
  {
    name: 'Tailwind CSS v4',
    description:
      'Utility-first CSS framework to style everything quickly and consistently',
    url: 'https://tailwindcss.com/',
    category: 'Styling',
    icon: '🎨',
  },
  {
    name: 'shadcn/ui',
    description:
      'Accessible, customizable React components that fit perfectly with Tailwind',
    url: 'https://ui.shadcn.com/',
    category: 'UI Components',
    icon: '🧩',
  },
  {
    name: 'Lucide React',
    description: 'Clean, consistent icons across the app',
    url: 'https://lucide.dev/',
    category: 'Icons',
    icon: '🌀',
  },
  {
    name: 'PokéAPI',
    description:
      'The open-source Pokémon API that powers all the data in the app',
    url: 'https://pokeapi.co/',
    category: 'Data Source',
    icon: '🔗',
  },
  {
    name: 'Vercel',
    description:
      'Deployment platform that makes Pokémon Stats blazing fast worldwide',
    url: 'https://vercel.com/',
    category: 'Deployment',
    icon: '🚀',
  },
  {
    name: 'DataBuddy',
    description:
      'Privacy-first analytics to understand usage and improve features',
    url: 'https://www.databuddy.cc/',
    category: 'Analytics',
    icon: '📊',
  },
];

export default function ThanksPage() {
  const [donations, setDonations] = useState<any[]>([]);
  const [contributors, setContributors] = useState<any[]>([]);
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Fetch donations and contributors on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API calls - in real implementation, these would be:
        // const donationsResponse = await fetch('/api/donations')
        // const contributorsResponse = await fetch('https://api.github.com/repos/username/pokemon-stats/contributors')

        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock donations data
        setDonations([
          {
            id: 1,
            name: 'Alex Chen',
            amount: 25,
            message:
              'Love the type effectiveness calculator! Keep up the great work! ⚡',
            date: '2024-01-15',
            avatar: '/placeholder.svg?height=40&width=40&text=AC',
          },
          {
            id: 2,
            name: 'Sarah Johnson',
            amount: 10,
            message: 'This app helped me build my competitive team. Thank you!',
            date: '2024-01-12',
            avatar: '/placeholder.svg?height=40&width=40&text=SJ',
          },
          {
            id: 3,
            name: 'Mike Rodriguez',
            amount: 50,
            message: 'Amazing work on the evolution chains! 🔥',
            date: '2024-01-10',
            avatar: '/placeholder.svg?height=40&width=40&text=MR',
          },
          {
            id: 4,
            name: 'Emma Wilson',
            amount: 15,
            message: 'The mobile experience is fantastic!',
            date: '2024-01-08',
            avatar: '/placeholder.svg?height=40&width=40&text=EW',
          },
          {
            id: 5,
            name: 'David Kim',
            amount: 30,
            message: "Best Pokédex app I've used. Thanks for making it free!",
            date: '2024-01-05',
            avatar: '/placeholder.svg?height=40&width=40&text=DK',
          },
        ]);

        // Mock contributors data
        setContributors([
          {
            id: 1,
            login: 'juandaniel-dev',
            name: 'Juan Daniel Martínez',
            contributions: 247,
            avatar_url: '/placeholder.svg?height=60&width=60&text=JD',
            role: 'Creator & Lead Developer',
          },
          {
            id: 2,
            login: 'pokemon-enthusiast',
            name: 'Alex Thompson',
            contributions: 23,
            avatar_url: '/placeholder.svg?height=60&width=60&text=AT',
            role: 'UI/UX Contributor',
          },
          {
            id: 3,
            login: 'data-wizard',
            name: 'Maria Garcia',
            contributions: 18,
            avatar_url: '/placeholder.svg?height=60&width=60&text=MG',
            role: 'Data Validation',
          },
          {
            id: 4,
            login: 'type-master',
            name: 'Chris Lee',
            contributions: 12,
            avatar_url: '/placeholder.svg?height=60&width=60&text=CL',
            role: 'Type System Expert',
          },
          {
            id: 5,
            login: 'mobile-dev',
            name: 'Lisa Wang',
            contributions: 8,
            avatar_url: '/placeholder.svg?height=60&width=60&text=LW',
            role: 'Mobile Optimization',
          },
        ]);

        setTotalDonations(130); // Sum of all donations
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

        {/* Donations Section */}
        <Card className="mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-yellow-500" />
              Recent Supporters
              <Badge className="bg-yellow-100 text-yellow-800 ml-2">
                ${totalDonations} raised
              </Badge>
            </CardTitle>
            <p className="text-gray-600">
              Thank you to everyone who has supported the project! Your
              contributions help keep Pokemon Stats free and ad-free.
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {donations.map((donation) => (
                  <div
                    key={donation.id}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                  >
                    <img
                      src={donation.avatar || '/placeholder.svg'}
                      alt={donation.name}
                      className="w-12 h-12 rounded-full bg-yellow-200"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">
                          {donation.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {donation.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        {donation.message}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-yellow-700">
                        ${donation.amount}
                      </div>
                      <div className="text-xs text-gray-500">donation</div>
                    </div>
                  </div>
                ))}

                <div className="text-center pt-4">
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
                      Support the Project
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contributors Section */}
        <Card className="mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              GitHub Contributors
              <Badge className="bg-blue-100 text-blue-800 ml-2">
                {contributors.length} contributors
              </Badge>
            </CardTitle>
            <p className="text-gray-600">
              Amazing developers who have contributed code, documentation, and
              improvements to Pokemon Stats.
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contributors.map((contributor) => (
                  <div
                    key={contributor.id}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <img
                      src={contributor.avatar_url || '/placeholder.svg'}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full bg-blue-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 truncate">
                        {contributor.name}
                      </div>
                      <div className="text-xs text-gray-600 truncate">
                        {contributor.role}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Code className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-500">
                          {contributor.contributions} commits
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center pt-6">
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                asChild
              >
                <a
                  href="https://github.com/juandadev/pokemonstats/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All Contributors
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

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
              {inspirations.map((inspiration, index) => (
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
              {tools.map((tool, index) => (
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
