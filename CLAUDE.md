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

## Important Patterns

### IMPORTANT: Avoid Overusing useEffect

**Reference:** [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

Only use `useEffect` for synchronizing with external systems (browser APIs, third-party libraries, subscriptions). For
most other cases, there are better alternatives:

| Scenario                        | Do NOT use useEffect       | Use Instead             |
|---------------------------------|----------------------------|-------------------------|
| Derive value from props/state   | `useEffect` + `setState`   | Calculate during render |
| User interaction triggers logic | `useEffect` watching state | Event handler directly  |
| Expensive calculation           | `useEffect` + `setState`   | `useMemo`               |
| Reset state on prop change      | `useEffect` + `setState`   | `key` prop on component |
| Chain of state updates          | Multiple `useEffect`s      | Single event handler    |

**Common Anti-Patterns to Avoid:**

```tsx
// ❌ BAD: Derived state in useEffect
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);

// ✅ GOOD: Calculate during render
const fullName = firstName + ' ' + lastName;
```

```tsx
// ❌ BAD: Event logic in useEffect
useEffect(() => {
  if (isSubmitted) {
    sendAnalytics();
  }
}, [isSubmitted]);

// ✅ GOOD: Logic in event handler
function handleSubmit() {
  setIsSubmitted(true);
  sendAnalytics();
}
```

```tsx
// ❌ BAD: Reset state with useEffect
useEffect(() => {
  setComment('');
}, [userId]);

// ✅ GOOD: Use key to reset component
<CommentForm key={userId} />
```

### IMPORTANT: TypeScript Strict Typing

**Never use `any` or `unknown`** - always create precise, intelligent types. Leverage TypeScript's utility types to
avoid duplication and keep types DRY.

**Utility Types to Use:**

| Utility         | Purpose                        | Example                               |
|-----------------|--------------------------------|---------------------------------------|
| `Partial<T>`    | Make all properties optional   | `Partial<Pokemon>` for updates        |
| `Pick<T, K>`    | Select specific properties     | `Pick<Pokemon, 'name' \| 'types'>`    |
| `Omit<T, K>`    | Exclude specific properties    | `Omit<Pokemon, 'id'>` for creation    |
| `Required<T>`   | Make all properties required   | `Required<Config>`                    |
| `Record<K, V>`  | Create object type with keys K | `Record<PokemonType, number>`         |
| `Extract<T, U>` | Extract types assignable to U  | `Extract<Response, { status: 'ok' }>` |
| `Exclude<T, U>` | Exclude types assignable to U  | `Exclude<Status, 'pending'>`          |

**Common Anti-Patterns to Avoid:**

```tsx
// ❌ BAD: Using any
function getPokemon(id: any): any {
  return fetch(`/api/pokemon/${id}`);
}

// ✅ GOOD: Precise types
function getPokemon(id: number): Promise<Pokemon> {
  return fetch(`/api/pokemon/${id}`);
}
```

```tsx
// ❌ BAD: Duplicated types
interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: Stats;
}

interface PokemonSummary {
  id: number;
  name: string;
  types: string[];
}

// ✅ GOOD: Derive from base type
interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: Stats;
}

type PokemonSummary = Pick<Pokemon, 'id' | 'name' | 'types'>;
```

```tsx
// ❌ BAD: Optional fields when you need a subset
interface PokemonUpdate {
  id?: number;
  name?: string;
  types?: string[];
  stats?: Stats;
}

// ✅ GOOD: Use Partial for updates
type PokemonUpdate = Partial<Pokemon>;

// ✅ GOOD: Or combine utilities for specific needs
type PokemonCreate = Omit<Pokemon, 'id'>;
type PokemonPatch = Partial<Omit<Pokemon, 'id'>>;
```

### IMPORTANT: Avoid Unnecessary Comments

**Only add comments for function/method documentation** (purpose, parameters, return values). All other comments are
noise - code should be self-documenting through clear naming and structure.

**When Comments ARE Appropriate:**

```tsx
// ✅ GOOD: Document function purpose, params, and return
/**
 * Calculates type effectiveness multiplier for attacking type vs defending types.
 * @param attackType - The attacking Pokemon's move type
 * @param defenseTypes - Array of the defending Pokemon's types
 * @returns Multiplier (0, 0.25, 0.5, 1, 2, or 4)
 */
function calculateEffectiveness(attackType: PokemonType, defenseTypes: PokemonType[]): number {
  // ...
}
```

**When Comments Are NOT Appropriate:**

```tsx
// ❌ BAD: Obvious from the code
// Set the name
setName(value);

// ❌ BAD: Explaining what code does instead of why
// Loop through all pokemon
for (const pokemon of pokemonList) {

// ❌ BAD: Commented-out code
// const oldValue = calculateOld();

// ❌ BAD: Redundant with good naming
// Check if pokemon is legendary
  const isLegendary = pokemon.isLegendary;
```

**Principles:**

- If you need a comment to explain *what* code does, refactor for clarity instead
- Comments explaining *why* (business logic, edge cases) are acceptable but rare
- Delete commented-out code - use git history instead
- Well-named functions, variables, and types eliminate most comment needs

# Tailwind CSS Rules and Best Practices

## Core Principles

- **Always use Tailwind CSS v4.1+** - Ensure the codebase is using the latest version
- **Do not use deprecated or removed utilities** - ALWAYS use the replacement
- **Never use `@apply`** - Use CSS variables, the `--spacing()` function, or framework components instead
- **Check for redundant classes** - Remove any classes that aren't necessary
- **Group elements logically** to simplify responsive tweaks later

## Upgrading to Tailwind CSS v4

### Before Upgrading

- **Always read the upgrade documentation first** - Read https://tailwindcss.com/docs/upgrade-guide
  and https://tailwindcss.com/blog/tailwindcss-v4 before starting an upgrade.
- Ensure the git repository is in a clean state before starting

### Upgrade Process

1. Run the upgrade command: `npx @tailwindcss/upgrade@latest` for both major and minor updates
2. The tool will convert JavaScript config files to the new CSS format
3. Review all changes extensively to clean up any false positives
4. Test thoroughly across your application

## Breaking Changes Reference

### Removed Utilities (NEVER use these in v4)

| ❌ Deprecated            | ✅ Replacement                                     |
|-------------------------|---------------------------------------------------|
| `bg-opacity-*`          | Use opacity modifiers like `bg-black/50`          |
| `text-opacity-*`        | Use opacity modifiers like `text-black/50`        |
| `border-opacity-*`      | Use opacity modifiers like `border-black/50`      |
| `divide-opacity-*`      | Use opacity modifiers like `divide-black/50`      |
| `ring-opacity-*`        | Use opacity modifiers like `ring-black/50`        |
| `placeholder-opacity-*` | Use opacity modifiers like `placeholder-black/50` |
| `flex-shrink-*`         | `shrink-*`                                        |
| `flex-grow-*`           | `grow-*`                                          |
| `overflow-ellipsis`     | `text-ellipsis`                                   |
| `decoration-slice`      | `box-decoration-slice`                            |
| `decoration-clone`      | `box-decoration-clone`                            |

### Renamed Utilities (ALWAYS use the v4 name)

| ❌ v3               | ✅ v4               |
|--------------------|--------------------|
| `bg-gradient-*`    | `bg-linear-*`      |
| `shadow-sm`        | `shadow-xs`        |
| `shadow`           | `shadow-sm`        |
| `drop-shadow-sm`   | `drop-shadow-xs`   |
| `drop-shadow`      | `drop-shadow-sm`   |
| `blur-sm`          | `blur-xs`          |
| `blur`             | `blur-sm`          |
| `backdrop-blur-sm` | `backdrop-blur-xs` |
| `backdrop-blur`    | `backdrop-blur-sm` |
| `rounded-sm`       | `rounded-xs`       |
| `rounded`          | `rounded-sm`       |
| `outline-none`     | `outline-hidden`   |
| `ring`             | `ring-3`           |

## Layout and Spacing Rules

### Flexbox and Grid Spacing

#### Always use gap utilities for internal spacing

Gap provides consistent spacing without edge cases (no extra space on last items). It's cleaner and more maintainable
than margins on children.

```html
<!-- ❌ Don't do this -->
<div class="flex">
  <div class="mr-4">Item 1</div>
  <div class="mr-4">Item 2</div>
  <div>Item 3</div>
  <!-- No margin on last -->
</div>

<!-- ✅ Do this instead -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Gap vs Space utilities

- **Never use `space-x-*` or `space-y-*` in flex/grid layouts** - always use gap
- Space utilities add margins to children and have issues with wrapped items
- Gap works correctly with flex-wrap and all flex directions

```html
<!-- ❌ Avoid space utilities in flex containers -->
<div class="flex flex-wrap space-x-4">
  <!-- Space utilities break with wrapped items -->
</div>

<!-- ✅ Use gap for consistent spacing -->
<div class="flex flex-wrap gap-4">
  <!-- Gap works perfectly with wrapping -->
</div>
```

### General Spacing Guidelines

- **Prefer top and left margins** over bottom and right margins (unless conditionally rendered)
- **Use padding on parent containers** instead of bottom margins on the last child
- **Always use `min-h-dvh` instead of `min-h-screen`** - `min-h-screen` is buggy on mobile Safari
- **Prefer `size-*` utilities** over separate `w-*` and `h-*` when setting equal dimensions
- For max-widths, prefer the container scale (e.g., `max-w-2xs` over `max-w-72`)

## Typography Rules

### Line Heights

- **Never use `leading-*` classes** - Always use line height modifiers with text size
- **Always use fixed line heights from the spacing scale** - Don't use named values

```html
<!-- ❌ Don't do this -->
<p class="text-base leading-7">Text with separate line height</p>
<p class="text-lg leading-relaxed">Text with named line height</p>

<!-- ✅ Do this instead -->
<p class="text-base/7">Text with line height modifier</p>
<p class="text-lg/8">Text with specific line height</p>
```

### Font Size Reference

Be precise with font sizes - know the actual pixel values:

- `text-xs` = 12px
- `text-sm` = 14px
- `text-base` = 16px
- `text-lg` = 18px
- `text-xl` = 20px

## Color and Opacity

### Opacity Modifiers

**Never use `bg-opacity-*`, `text-opacity-*`, etc.** - use the opacity modifier syntax:

```html
<!-- ❌ Don't do this -->
<div class="bg-red-500 bg-opacity-60">Old opacity syntax</div>

<!-- ✅ Do this instead -->
<div class="bg-red-500/60">Modern opacity syntax</div>
```

## Responsive Design

### Breakpoint Optimization

- **Check for redundant classes across breakpoints**
- **Only add breakpoint variants when values change**

```html
<!-- ❌ Redundant breakpoint classes -->
<div class="px-4 md:px-4 lg:px-4">
  <!-- md:px-4 and lg:px-4 are redundant -->
</div>

<!-- ✅ Efficient breakpoint usage -->
<div class="px-4 lg:px-8">
  <!-- Only specify when value changes -->
</div>
```

## Dark Mode

### Dark Mode Best Practices

- Use the plain `dark:` variant pattern
- Put light mode styles first, then dark mode styles
- Ensure `dark:` variant comes before other variants

```html
<!-- ✅ Correct dark mode pattern -->
<div class="bg-white text-black dark:bg-black dark:text-white">
  <button class="hover:bg-gray-100 dark:hover:bg-gray-800">Click me</button>
</div>
```

## Gradient Utilities

- **ALWAYS Use `bg-linear-*` instead of `bg-gradient-*` utilities** - The gradient utilities were renamed in v4
- Use the new `bg-radial` or `bg-radial-[<position>]` to create radial gradients
- Use the new `bg-conic` or `bg-conic-*` to create conic gradients

```html
<!-- ✅ Use the new gradient utilities -->
<div class="h-14 bg-linear-to-br from-violet-500 to-fuchsia-500"></div>
<div
  class="size-18 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"
></div>
<div
  class="size-24 bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"
></div>

<!-- ❌ Do not use bg-gradient-* utilities -->
<div class="h-14 bg-gradient-to-br from-violet-500 to-fuchsia-500"></div>
```

## Working with CSS Variables

### Accessing Theme Values

Tailwind CSS v4 exposes all theme values as CSS variables:

```css
/* Access colors, and other theme values */
.custom-element {
    background: var(--color-red-500);
    border-radius: var(--radius-lg);
}
```

### The `--spacing()` Function

Use the dedicated `--spacing()` function for spacing calculations:

```css
.custom-class {
    margin-top: calc(100vh - --spacing(16));
}
```

### Extending theme values

Use CSS to extend theme values:

```css
@import "tailwindcss";

@theme {
    --color-mint-500: oklch(0.72 0.11 178);
}
```

```html

<div class="bg-mint-500">
  <!-- ... -->
</div>
```

## New v4 Features

### Container Queries

Use the `@container` class and size variants:

```html

<article class="@container">
  <div class="flex flex-col @md:flex-row @lg:gap-8">
    <img class="w-full @md:w-48" />
    <div class="mt-4 @md:mt-0">
      <!-- Content adapts to container size -->
    </div>
  </div>
</article>
```

### Container Query Units

Use container-based units like `cqw` for responsive sizing:

```html

<div class="@container">
  <h1 class="text-[50cqw]">Responsive to container width</h1>
</div>
```

### Text Shadows (v4.1)

Use text-shadow-\* utilities from text-shadow-2xs to text-shadow-lg:

```html
<!-- ✅ Text shadow examples -->
<h1 class="text-shadow-lg">Large shadow</h1>
<p class="text-shadow-sm/50">Small shadow with opacity</p>
```

### Masking (v4.1)

Use the new composable mask utilities for image and gradient masks:

```html
<!-- ✅ Linear gradient masks on specific sides -->
<div class="mask-t-from-50%">Top fade</div>
<div class="mask-b-from-20% mask-b-to-80%">Bottom gradient</div>
<div class="mask-linear-from-white mask-linear-to-black/60">
  Fade from white to black
</div>

<!-- ✅ Radial gradient masks -->
<div class="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left">
  Radial mask
</div>
```

## Component Patterns

### Avoiding Utility Inheritance

Don't add utilities to parents that you override in children:

```html
<!-- ❌ Avoid this pattern -->
<div class="text-center">
  <h1>Centered Heading</h1>
  <div class="text-left">Left-aligned content</div>
</div>

<!-- ✅ Better approach -->
<div>
  <h1 class="text-center">Centered Heading</h1>
  <div>Left-aligned content</div>
</div>
```

### Component Extraction

- Extract repeated patterns into framework components, not CSS classes
- Keep utility classes in templates/JSX
- Use data attributes for complex state-based styling

## CSS Best Practices

### Nesting Guidelines

- Use nesting when styling both parent and children
- Avoid empty parent selectors

```css
/* ✅ Good nesting - parent has styles */
.card {
    padding: --spacing(4);

    > .card-title {
        font-weight: bold;
    }
}

/* ❌ Avoid empty parents */
ul {
    > li {
        /* Parent has no styles */
    }
}
```

## Common Pitfalls to Avoid

1. **Using old opacity utilities** - Always use `/opacity` syntax like `bg-red-500/60`
2. **Redundant breakpoint classes** - Only specify changes
3. **Space utilities in flex/grid** - Always use gap
4. **Leading utilities** - Use line-height modifiers like `text-sm/6`
5. **Arbitrary values** - Use the design scale
6. **@apply directive** - Use components or CSS variables
7. **min-h-screen on mobile** - Use min-h-dvh
8. **Separate width/height** - Use size utilities when equal
9. **Arbitrary values** - Always use Tailwind's predefined scale whenever possible (e.g., use `ml-4` over `ml-[16px]`)