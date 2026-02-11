import { NextResponse } from 'next/server';
import { GithubStarsResponse } from '@/types';

export async function GET(): Promise<NextResponse<GithubStarsResponse>> {
  try {
    const token = process.env.GITHUB_TOKEN;

    const response = await fetch(
      'https://api.github.com/repos/juandadev/pokemonstats',
      {
        headers: {
          'User-Agent': 'pokemonstats-app',
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          'Cache-Control': 's-maxage=604800, stale-while-revalidate',
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { stars: 0, error: response.statusText },
        { status: response.status }
      );
    }

    const data = (await response.json()) as { stargazers_count: number };

    return NextResponse.json({
      stars: data.stargazers_count || 0,
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { stars: 0, error: 'Failed to fetch GitHub stars' },
      { status: 200 }
    );
  }
}
