import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Github, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Contributor } from '@/app/api/contributors/route';
import { Slot } from '@radix-ui/react-slot';

async function getContributors(): Promise<Contributor[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/contributors`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function GithubContributors() {
  const contributors = await getContributors();

  if (!contributors.length) {
    return (
      <p className="text-sm opacity-70">
        No contributors yet (or API limit hit).
      </p>
    );
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contributors.map((contributor) => (
            <Slot
              key={contributor.id}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow duration-200"
            >
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={contributor.avatar_url || '/placeholder.svg'}
                  alt={contributor.login}
                  className="size-12 rounded-full bg-blue-200"
                  unoptimized
                  width={48}
                  height={48}
                  priority={false}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">
                    {contributor.login}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Code className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-gray-500">
                      {contributor.contributions} commits
                    </span>
                  </div>
                </div>
              </a>
            </Slot>
          ))}
        </div>

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
