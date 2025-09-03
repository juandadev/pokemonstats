import { NextResponse } from 'next/server';

export const revalidate = 84600;

export interface Contributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  contributions: number;
}

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;

    const response = await fetch(
      'https://api.github.com/repos/juandadev/pokemonstats/contributors?per_page=6',
      {
        headers: {
          'User-Agent': 'pokemonstats-app',
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to load contributors' },
        { status: 502 }
      );
    }

    const data = (await response.json()) as Contributor[];

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=84600, stale-while-revalidate=3600',
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message ?? 'Failed' },
      { status: 502 }
    );
  }
}
