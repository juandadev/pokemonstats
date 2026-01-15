import { fetchStarCount } from '@/lib/github';
import HeroContent from './HeroContent';

export default async function Hero() {
  const starCount = await fetchStarCount();

  return <HeroContent starCount={starCount} />;
}
