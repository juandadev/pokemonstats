'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Github, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function GithubContributors() {
  const [loading, setLoading] = useState(true);
  const [contributors, setContributors] = useState<any[]>([]);

  // Fetch donations and contributors on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API calls - in real implementation, these would be:
        // const donationsResponse = await fetch('/api/donations')
        // const contributorsResponse = await fetch('https://api.github.com/repos/username/pokemon-stats/contributors')

        await new Promise((resolve) => setTimeout(resolve, 1500));

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

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
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
  );
}
