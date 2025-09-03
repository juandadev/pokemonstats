import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RoadmapStatus } from '@/types/roadmap.types';
import { ROADMAP, SITE_URL } from '@/common/constants';
import { Metadata } from 'next';

const itemsOrder: Record<RoadmapStatus, number> = {
  completed: 1,
  'in-progress': 2,
  planned: 3,
  skipped: 4,
};

const sortedList = ROADMAP.sort(
  (a, b) => itemsOrder[a.status] - itemsOrder[b.status]
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Roadmap & Changelog | Pokémon Stats',
  description:
    'See what’s shipped and what’s coming next for Pokémon Stats: new features, UI updates, performance work, and PokéAPI improvements—all in one place.',
  alternates: {
    canonical: `${SITE_URL}/roadmap`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/roadmap`,
    siteName: 'Pokémon Stats',
    title: 'Roadmap & Changelog',
    description:
      'What we shipped and what’s next for Pokémon Stats—features, UI, and performance updates.',
    // TODO: uncomment below when OG image generation is done
    // images: [
    //   {
    //     url: `${SITE_URL}/api/og?route=roadmap`,
    //     width: 1200,
    //     height: 630,
    //     alt: 'Pokémon Stats Roadmap',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roadmap & Changelog | Pokémon Stats',
    description: 'Track features, fixes, and upcoming work for Pokémon Stats.',
    // images: [`${SITE_URL}/api/og?route=roadmap`],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  keywords: [
    'pokemon stats roadmap',
    'pokemon stats changelog',
    'release notes',
    'product updates',
  ],
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Roadmap & Changelog | Pokémon Stats',
      url: `${SITE_URL}/roadmap`,
      about: 'Product updates and plans for Pokémon Stats.',
    }),
  },
};

export default function RoadmapPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'planned':
        return <Calendar className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const completedItems = ROADMAP.filter(
    (item) => item.status === 'completed'
  ).length;
  const inProgressItems = ROADMAP.filter(
    (item) => item.status === 'in-progress'
  ).length;
  const plannedItems = ROADMAP.filter(
    (item) => item.status === 'planned'
  ).length;

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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Project Roadmap
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What&apos;s Next?
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our roadmap for Pokemon Stats after the official release. Track our
            progress and see what exciting features are coming next.
          </p>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-700 mb-1">
                {completedItems}
              </div>
              <div className="text-sm text-green-600 font-medium">
                Completed
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {inProgressItems}
              </div>
              <div className="text-sm text-blue-600 font-medium">
                In Progress
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="text-2xl font-bold text-gray-700 mb-1">
                {plannedItems}
              </div>
              <div className="text-sm text-gray-600 font-medium">Planned</div>
            </div>
          </div>
        </div>

        {/* Roadmap Items */}
        <div className="space-y-6">
          {sortedList.map((item) => (
            <Card
              key={item.id}
              className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 text-center">
                        {item.title}
                      </h3>
                      <Badge
                        className={`${getStatusColor(
                          item.status
                        )} border text-xs font-medium`}
                      >
                        <div className="flex items-center gap-1">
                          {getStatusIcon(item.status)}
                          <span className="capitalize">
                            {item.status.replace('-', ' ')}
                          </span>
                        </div>
                      </Badge>
                      <Badge
                        className={`${getPriorityColor(
                          item.priority
                        )} text-xs font-medium`}
                      >
                        {item.priority} priority
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>{item.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.estimatedCompletion}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Contribute?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Pokemon Stats is an open-source project! We welcome
                contributions from the community. Whether you&apos;re a
                developer, designer, or just have great ideas, there are many
                ways to help.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Code Contributions
                  </div>
                  <div className="text-xs text-gray-600">
                    Help build new features
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Design & UX
                  </div>
                  <div className="text-xs text-gray-600">
                    Improve user experience
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Ideas & Feedback
                  </div>
                  <div className="text-xs text-gray-600">
                    Share your suggestions
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
                    <Code className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                  asChild
                >
                  <a
                    href="https://github.com/juandadev/pokemonstats/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Report Issues
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
            <Link href="/thanks">View Special Thanks</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
