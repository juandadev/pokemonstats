import React from 'react';
import ContributorsContent from '@/components/GithubContributors/ContributorsContent';
import { Contributor } from '@/app/api/contributors/route';
import { CONTRIBUTORS } from '@/common/constants';

async function getContributors(): Promise<Contributor[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/contributors`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function Contributors() {
  const githubContributors = await getContributors();
  const contributors = [...githubContributors, ...CONTRIBUTORS];

  if (!contributors) {
    return null;
  }

  return <ContributorsContent contributors={contributors} />;
}
