import { Roadmap } from '@/types/roadmap.types';
import { Contributor } from '@/app/api/contributors/route';
import { BrushIcon } from 'lucide-react';
import EVOLUTION_OVERRIDES from '@/data/custom-evolution-overrides.json';
import ITEMS_INDEX from '@/data/items-index.json';
import POKEMON_INDEX from '@/data/pokemon-index.json';
import { EvolutionChain } from '@/types/evolutions.types';
import { PokemonIndexItem } from '@/types/pokemon.types';
import { ItemData } from '@/types/items.types';

export const ROADMAP: Roadmap[] = [
  {
    id: 9,
    title: 'Analytics & Insights',
    description:
      'Understand how the app is used to improve features and experience.',
    status: 'completed',
    priority: 'high',
    category: 'Quality & Insights',
    estimatedCompletion: 'Q3 2025',
    features: ['Track searches', 'Page views', 'Heat maps'],
  },
  {
    id: 1,
    title: 'Pokémon Search History',
    description:
      'Quickly go back to your last 5 Pokémon searches without searching again.',
    status: 'planned',
    priority: 'high',
    category: 'Core Features',
    estimatedCompletion: 'Q1 2026',
    features: [
      'Persistent search history',
      'No repeated Pokémon in the list',
      'Floating button for fast access',
    ],
  },
  {
    id: 2,
    title: 'Advanced Battle Modifiers',
    description:
      'Accurate type effectiveness that includes special moves, abilities, and new battle rules.',
    status: 'planned',
    priority: 'high',
    category: 'Effectiveness Chart',
    estimatedCompletion: 'Q1 2026',
    features: [
      'Special moves like Flying Press & Freeze Dry',
      'Inverse battles support',
      'Tera & Stellar forms',
      'Pokémon abilities that change effectiveness',
    ],
  },
  {
    id: 3,
    title: 'Pokémon Evolution Details by Game',
    description:
      'Filter evolution methods based on specific game versions for accurate information.',
    status: 'planned',
    priority: 'medium',
    category: 'Core Features',
    estimatedCompletion: 'Q2 2026',
    features: ['Version-specific evolution rules', 'Examples with Eevee'],
  },
  {
    id: 4,
    title: 'Pokémon Generations & Regions',
    description:
      'Improved experience for Pokémon grouped by generation, region, forms, and variants.',
    status: 'planned',
    priority: 'medium',
    category: 'Pokémon Data',
    estimatedCompletion: 'Q3 2026',
    features: [
      'Generations overview',
      'Regional Pokédex pages',
      'Forms and variants catalog',
    ],
  },
  {
    id: 7,
    title: 'Multilingual Support',
    description:
      'Use Pokémon Stats in multiple languages, starting with Spanish.',
    status: 'in-progress',
    priority: 'high',
    category: 'Accessibility',
    estimatedCompletion: 'Q4 2025',
    features: ['Spanish translation', 'Internationalization framework'],
  },
  {
    id: 8,
    title: 'Full Accessibility Support',
    description:
      'Making the app usable for everyone with screen readers and keyboard navigation.',
    status: 'planned',
    priority: 'low',
    category: 'Accessibility',
    estimatedCompletion: 'Q4 2026',
    features: ['Screen reader support', 'Keyboard-friendly navigation'],
  },
  {
    id: 5,
    title: 'Competitive Battling Hub',
    description:
      'Comprehensive data for serious battles: moves, abilities, items, and more.',
    status: 'planned',
    priority: 'low',
    category: 'Competitive',
    estimatedCompletion: 'Not estimated',
    features: [
      'Moves list with details',
      'Abilities and effects',
      'Held items and natures',
      'Tera types database',
    ],
  },
  {
    id: 6,
    title: 'Pokémon Team Builder',
    description:
      'Create and analyze your dream team with effectiveness charts and synergy tools.',
    status: 'planned',
    priority: 'low',
    category: 'Competitive',
    estimatedCompletion: 'Not estimated',
    features: [
      'Build custom teams',
      'Type effectiveness for teams',
      'Strengths and weaknesses overview',
    ],
  },
];

export const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://pokemonstats.com';
export const INSPIRATIONS = [
  {
    name: 'PokéAPI',
    description:
      'The comprehensive Pokémon data API that powers our application',
    url: 'https://pokeapi.co/',
    category: 'Data Source',
    icon: '🔗',
  },
  {
    name: 'Pokémon Palette',
    description: 'Inspiration for our color scheme and design aesthetic',
    url: 'https://www.pokemonpalette.com/',
    category: 'Design Inspiration',
    icon: '🎨',
  },
  {
    name: 'Pokémon Type Calculator',
    description: 'The type effectiveness calculator that inspired our tool',
    url: 'https://www.pkmn.help/defense/',
    category: 'Reference',
    icon: '🛡️',
  },
];

export const TOOLS = [
  {
    name: 'Next.js 15',
    description: 'React framework we use for fast, and static Pokémon pages',
    url: 'https://nextjs.org/',
    category: 'Framework',
    icon: '▲',
  },
  {
    name: 'React 19',
    description:
      'Modern React with the latest features powering the whole experience',
    url: 'https://react.dev/',
    category: 'Library',
    icon: '⚛️',
  },
  {
    name: 'Tailwind CSS v4',
    description:
      'Utility-first CSS framework to style everything quickly and consistently',
    url: 'https://tailwindcss.com/',
    category: 'Styling',
    icon: '🎨',
  },
  {
    name: 'shadcn/ui',
    description:
      'Accessible, customizable React components that fit perfectly with Tailwind',
    url: 'https://ui.shadcn.com/',
    category: 'UI Components',
    icon: '🧩',
  },
  {
    name: 'Lucide React',
    description: 'Clean, consistent icons across the app',
    url: 'https://lucide.dev/',
    category: 'Icons',
    icon: '🌀',
  },
  {
    name: 'PokéAPI',
    description:
      'The open-source Pokémon API that powers all the data in the app',
    url: 'https://pokeapi.co/',
    category: 'Data Source',
    icon: '🔗',
  },
  {
    name: 'Vercel',
    description:
      'Deployment platform that makes Pokémon Stats blazing fast worldwide',
    url: 'https://vercel.com/',
    category: 'Deployment',
    icon: '🚀',
  },
  {
    name: 'Databuddy',
    description:
      'Privacy-first analytics to understand usage and improve features',
    url: 'https://www.databuddy.cc/',
    category: 'Analytics',
    icon: '📊',
  },
];

export const CONTRIBUTORS: Contributor[] = [
  {
    login: 'Altarichiru',
    id: 202509172328,
    avatar_url: '/hero-art-contributor.webp',
    html_url: 'https://www.tumblr.com/altarichiru',
    contributions: 0,
    custom_contribution: 'Art & Illustration',
    category: <BrushIcon className="size-3 text-green-500" />,
  },
];

export const CUSTOM_EVOLUTION_CHAINS = EVOLUTION_OVERRIDES as Record<
  string,
  EvolutionChain
>;

export const POKEMON_LIST = POKEMON_INDEX as PokemonIndexItem[];

export const ITEMS_LIST = ITEMS_INDEX as ItemData[];
