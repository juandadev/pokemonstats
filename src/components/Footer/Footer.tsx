import {
  AlertTriangleIcon,
  ExternalLinkIcon,
  GithubIcon,
  HandshakeIcon,
  HeartIcon,
  InfoIcon,
  TrendingUpIcon,
} from 'lucide-react';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className={
        'flex flex-col gap-8 mt-10 md:px-8 md:py-12 px-4 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200'
      }
    >
      {/* Disclaimer Section */}
      <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
        <AlertTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-yellow-800">
          <p className="font-semibold mb-1">Disclaimer</p>
          <p>
            This is an unofficial Pokémon application created for educational
            and entertainment purposes. Pokémon is a trademark of Nintendo, Game
            Freak, and The Pokémon Company. This project is not affiliated with,
            endorsed by, or sponsored by Nintendo, Game Freak, or The Pokémon
            Company.
          </p>
        </div>
      </div>
      {/* Links Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <Link
          href="/roadmap"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
        >
          <TrendingUpIcon className="size-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">Project Roadmap</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50" />
        </Link>
        <Link
          href="/thanks"
          className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200 group"
        >
          <HandshakeIcon className="size-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">Special Thanks</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50" />
        </Link>
        <a
          href="https://github.com/juandadev/pokemonstats"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
        >
          <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">View Source Code</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50" />
        </a>
        <a
          href="https://github.com/juandadev/pokemonstats/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200 group"
        >
          <AlertTriangleIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">Report an Issue</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50" />
        </a>
        <a
          href="https://buymeacoffee.com/juandadotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-fairy transition-colors duration-200 group"
        >
          <HeartIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">Support Project</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50" />
        </a>
        <a
          href="https://pokeapi.co/docs/v2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
        >
          <InfoIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">PokéAPI Docs</span>
          <ExternalLinkIcon className="w-3 h-3 opacity-50" />
        </a>
      </div>
      {/* Bottom Section */}
      <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          Made with 💚 by{' '}
          <a
            href="https://juanda.dev"
            className="underline hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juan Daniel Martínez
          </a>
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          <Link
            href="/privacy"
            className="text-sm text-gray-500 text-center md:text-left underline"
          >
            Privacy Policy
          </Link>
          ・
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2021-{currentYear} Pokemon Stats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
