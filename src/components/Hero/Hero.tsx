import { Button } from '@/components/ui/button';
import { CoffeeIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-8 shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live Pokédex Data
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Pokemon
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stats
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Quickly explore weaknesses, evolutions, and more. A clean Pokédex
              companion made for casual trainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link
                  href={'https://github.com/juandadev/pokemonstats'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-5 h-5 mr-2" />
                  View Source Code
                </Link>
              </Button>
              <Button
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link
                  href={'https://coff.ee/juandadotdev'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CoffeeIcon className="w-5 h-5 mr-2" />
                  Support Project
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl scale-150 opacity-30"></div>
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/hero.webp"
                  alt="Ash with Pikachu"
                  className="w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-300 rounded-full opacity-20 blur-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
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
      </div>
    </section>
  );
}
