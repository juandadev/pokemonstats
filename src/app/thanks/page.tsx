import ThanksContent from './ThanksContent';
import CoffeeSupporters from '@/components/CoffeeSupporters/CoffeeSupporters';
import Contributors from '@/components/GithubContributors/Contributors';

export default function ThanksPage() {
  return (
    <ThanksContent>
      <CoffeeSupporters />
      <Contributors />
    </ThanksContent>
  );
}
