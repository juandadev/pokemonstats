import { GithubStarsResponse } from '@/types';
import HeroContent from './HeroContent';

async function getStars(): Promise<number> {
  try {
    const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const response = await fetch(`${url}/api/github/stars`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return 0;

    const data = (await response.json()) as GithubStarsResponse;
    return data.stars;
  } catch (error) {
    return 0;
  }
}

export default async function Hero() {
  const initialStars = await getStars();

  return <HeroContent initialStars={initialStars} />;
}
