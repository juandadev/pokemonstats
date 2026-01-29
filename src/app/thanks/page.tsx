import ThanksContent from './ThanksContent';
import CoffeeSupporters from '@/components/CoffeeSupporters/CoffeeSupporters';
import Contributors from '@/components/GithubContributors/Contributors';

export const dynamic = 'force-static';
export const revalidate = 604800; // 1 week in seconds

export default function ThanksPage() {
  return (
    <ThanksContent>
      <CoffeeSupporters />
      <Contributors />
    </ThanksContent>
  );
}
