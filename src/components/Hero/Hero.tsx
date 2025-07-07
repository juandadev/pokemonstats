import { Button } from '@/components/ui/button';
import { CoffeeIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div id={'hero'}>
      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-8 shadow-sm border border-gray-200">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Live Pokédex Data
      </div>
    </div>
  );
}
