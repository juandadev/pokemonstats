import { Button } from '@/components/ui/button';
import { CoffeeIcon, GithubIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div
      id={'hero'}
      className={
        'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 relative pb-16'
      }
    >
      <div className={'flex flex-col gap-8'}>
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 shadow-sm border border-gray-200 w-fit">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Live Pokédex Data
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Pokemon{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stats
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
          Quickly explore weaknesses, evolutions, and more. A clean Pokédex
          companion made for casual trainers.
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
            <a
              href="https://github.com/juandadev/pokemonstats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-5 h-5" />
              View Source Code
            </a>
          </Button>
          <Button
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900"
            asChild
          >
            <a
              href="https://coff.ee/juandadotdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CoffeeIcon className="w-5 h-5" />
              Support Project
            </a>
          </Button>
        </div>
      </div>
      {/* Illustration */}
      <div className="flex justify-center relative">
        {/* Main illustration */}
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <img
            src="/hero.webp"
            alt="Pokémon Trainer with Pikachu"
            className="w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Scroll indicator */}
      <a
        href={'#main'}
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
