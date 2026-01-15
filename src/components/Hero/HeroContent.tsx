'use client';

import { Button } from '@/components/ui/button';
import { HeartIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/i18n';

interface HeroContentProps {
  starCount: number;
}

export default function HeroContent({ starCount }: HeroContentProps) {
  const { t } = useTranslation();

  return (
    <div
      id={'hero'}
      className={
        'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 relative pb-16'
      }
    >
      <div className={'flex flex-col gap-8'}>
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 shadow-sm border border-gray-200 w-fit">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {t('hero.badge', 'Live Pokédex Data')}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          {t('hero.title', 'Pokémon Stats')}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
          {t(
            'hero.subtitle',
            'Quickly explore weaknesses, evolutions, and more. A clean Pokédex companion made for casual trainers.'
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
            <a
              href="https://github.com/juandadev/pokemonstats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-1 py-1 px-2 bg-white/20 rounded-full">
                <StarIcon className="w-3 h-3 fill-current" />
                <span className="text-xs font-semibold">{starCount}</span>
              </div>
              {t('hero.buttons.github', 'Star on GitHub')}
            </a>
          </Button>
          <Button variant={'outline'} asChild>
            <a
              href="https://coff.ee/juandadotdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeartIcon className="w-5 h-5 text-fairy" />
              {t('hero.buttons.support', 'Support Project')}
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center relative mb-8">
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <Image
            width={320}
            height={320}
            sizes="(max-width: 768px) 320px, (min-width: 768px) 384px"
            src="/hero.webp"
            alt="Pokémon Trainer with Pikachu"
            className="w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
        <p className="text-gray-400 text-xs">
          {t('hero.illustration.credit', 'Illustration by')}{' '}
          <a
            href="https://www.tumblr.com/altarichiru"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.illustration.artist', 'Altarichiru')}
          </a>
        </p>
      </div>
      <a
        href="#main"
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center animate-bounce">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
