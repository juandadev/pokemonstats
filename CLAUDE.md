# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pokémon Stats is a mobile-first Pokédex built with Next.js 15, focused on quick visual access to type matchups and
evolution chains. The app uses fully static generation for optimal performance, with all Pokémon routes pre-rendered at
build time.

**Tech Stack:**

- Next.js 15 (App Router) with React 19
- TypeScript
- Tailwind CSS v4
- PokeAPI (force-cached at build time)
- Node 20.x

## Commands

```bash
# Development
npm run dev                    # Start dev server with Turbopack
npm run build                  # Production build (generates all static routes)
npm run start                  # Start production server
npm run lint                   # Run ESLint

# Data Generation (run before build if PokeAPI data needs updating)
npm run build:pokemon-index    # Generate Pokemon index from PokeAPI
npm run build:item-index       # Generate items index from PokeAPI
```

**Local Build Testing:**
Set `LOCAL_BUILD=true` environment variable to only generate a single Pokemon (Totodile) during development builds for
faster iteration.

## Architecture

### Static Generation Strategy

**Critical:** All Pokemon routes are **completely static** at build time:

- `dynamicParams = false` - Only pre-generated routes work
- `revalidate = false` - No revalidation
- `dynamic = 'force-static'` - Forces static generation
- `generateStaticParams()` generates all routes from `POKEMON_LIST` constant

Routes: `/{pokemon-slug}` (e.g., `/gengar`, `/charizard-mega-x`)

### Data Flow

1. **Build-time Data Generation:**
    - Scripts in `/scripts/` fetch from PokeAPI and generate JSON indexes
    - Output: `/src/data/*-index.json` files (Pokemon, items, mega evolutions, Gigantamax forms)
    - These indexes are committed to the repo to avoid runtime API calls

2. **Page Generation:**
    - `src/app/[pokemon]/page.tsx` uses `generateStaticParams()` to create all routes
    - Each page fetches data via `getPokemonDataBySlug()` at build time
    - All PokeAPI requests use `cache: 'force-cache'`
    - Data includes: Pokemon data, species data, evolution chains, moves

3. **Special Cases:**
    - Missing sprites: Handled by `MISSING_SPRITE_LIST` map
    - Custom evolution chains: Overridden via `CUSTOM_EVOLUTION_CHAINS`
    - Regional forms, Mega evolutions, Gigantamax: Tracked in separate indexes

### Key Data Types

**PokeAPI Data Types** (`src/types/`):

- `PokemonData` - Basic Pokemon info (sprites, types, abilities, moves)
- `Species` - Species data with `flavor_text_entries`, `names`, `genera` (has language support)
- `EvolutionChain` - Evolution tree structure
- `MoveApiData` - Move details with `effect_entries`, `names` (has language support)

### Component Structure

**UI Components** (`src/components/`):

- Built with shadcn/ui components
- Styled with Tailwind CSS
- Responsive breakpoint: `md:` (768px)

**Key Components:**

- `PokemonCard` - Tabbed interface (Overview, Base Stats, Moves)
- `EffectivenessChart` - Interactive type matchup calculator (offensive/defensive modes)
- `EvolutionsCard` - Visual evolution chain with detailed evolution methods
- `SearchBar` - Fuzzy search with keyboard navigation (↑↓ to navigate, Enter to select)

### Data Constants

**Static Data** (`src/common/constants/index.tsx`):

- `POKEMON_LIST` - All Pokémon with slugs (from pokemon-index.json)
- `ITEMS_LIST` - Items data
- `MEGA_EVOS_LIST` - Mega evolution forms
- `GMAX_LIST` - Gigantamax forms
- `MISSING_SPRITE_LIST` - Fallback sprites for Pokémon with missing artwork
- `CUSTOM_EVOLUTION_CHAINS` - Manual evolution chain overrides for edge cases

### Build Process Notes

1. **Full Build:** Generates 1000+ static pages (one per Pokémon/form)
2. **Build Time:** Can be slow; use `LOCAL_BUILD=true` for dev
3. **PokeAPI Caching:** All requests cached at build time, zero runtime API calls
4. **Deployment:** Vercel-optimized with static exports

## Important Patterns

**Type Effectiveness Calculation:**
Located in `src/lib/effectiveness.ts` - handles single and dual-type matchup calculations with type chart data.

**Pokémon Display Names:**
`src/lib/pokemonDisplayName.ts` - Formats Pokémon names from API format (e.g., `charizard-mega-x` → `Charizard Mega X`).
Handles regional forms, Mega evolutions, Gigantamax.

**Move List Building:**
`src/lib/move-list.ts` - Fetches and processes move data at build time.

**Preferences Storage:**
`src/lib/preferences.ts` - Manages localStorage for user preferences (game version selection, locale).

## Deployment

- Hosted on Vercel
- Production: Fully static build
- No environment variables required (all data pre-fetched)
- Analytics: Uses Databuddy SDK for privacy-focused tracking
