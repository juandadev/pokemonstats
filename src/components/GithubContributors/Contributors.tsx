import React from 'react';
import ContributorsContent from '@/components/GithubContributors/ContributorsContent';
import { CONTRIBUTORS } from '@/common/constants';

export interface Contributor {
  login: string;
  id: number;
  node_id?: string;
  avatar_url: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  user_view_type?: string;
  site_admin?: boolean;
  contributions: number;
  custom_contribution?: string;
  category?: React.ReactNode;
}

async function getContributors(): Promise<Contributor[]> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) return [];

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

  if (!response.ok) return [];

  return (await response.json()) as Contributor[];
}

export default async function Contributors() {
  const githubContributors = await getContributors();
  const contributors = [...githubContributors, ...CONTRIBUTORS];

  if (!contributors) {
    return null;
  }

  return <ContributorsContent contributors={contributors} />;
}
