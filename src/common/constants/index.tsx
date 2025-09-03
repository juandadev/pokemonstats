import { Roadmap } from '@/types/roadmap.types';

export const ROADMAP: Roadmap[] = [
  {
    id: 9,
    title: 'Analytics & Insights',
    description:
      'Understand how the app is used to improve features and experience.',
    status: 'in-progress',
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
    estimatedCompletion: 'Q4 2025',
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
    estimatedCompletion: 'Q1 - Q2 2026',
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
    estimatedCompletion: 'Q2 2026',
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
    status: 'planned',
    priority: 'medium',
    category: 'Accessibility',
    estimatedCompletion: 'Q3 2026',
    features: ['Spanish translation', 'Internationalization framework'],
  },
  {
    id: 8,
    title: 'Full Accessibility Support',
    description:
      'Making the app usable for everyone with screen readers and keyboard navigation.',
    status: 'planned',
    priority: 'medium',
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
