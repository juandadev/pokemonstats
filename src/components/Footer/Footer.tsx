import {
  AlertTriangleIcon,
  CoffeeIcon,
  ExternalLinkIcon,
  GithubIcon,
  InfoIcon,
} from 'lucide-react';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-15 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
      <div className="px-8 py-12">
        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Disclaimer</p>
              <p>
                This is an unofficial Pokémon application created for
                educational and entertainment purposes. Pokémon is a trademark
                of Nintendo, Game Freak, and The Pokémon Company. This project
                is not affiliated with, endorsed by, or sponsored by Nintendo,
                Game Freak, or The Pokémon Company.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 justify-items-center">
          <Link
            href="https://github.com/juandadev/pokemonstats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">View Source Code</span>
            <ExternalLinkIcon className="w-3 h-3 opacity-50" />
          </Link>
          <Link
            href="https://github.com/juandadev/pokemonstats/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200 group"
          >
            <AlertTriangleIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">Report an Issue</span>
            <ExternalLinkIcon className="w-3 h-3 opacity-50" />
          </Link>
          <Link
            href="https://buymeacoffee.com/juandadotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200 group"
          >
            <CoffeeIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">Support Project</span>
            <ExternalLinkIcon className="w-3 h-3 opacity-50" />
          </Link>
          <Link
            href="https://pokeapi.co/docs/v2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
          >
            <InfoIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">PokéAPI Docs</span>
            <ExternalLinkIcon className="w-3 h-3 opacity-50" />
          </Link>
        </div>
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              Made with 💚 by{' '}
              <Link href={'https://www.juanda.dev/'} className={'underline'}>
                Juan Daniel Martínez
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Pokemon Stats. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
