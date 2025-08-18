import { MegaVariant, Region } from '@/types/pokemon.types';

export type ParsedForm =
  | {
      kind: 'mega';
      baseSlug: string;
      baseDisplay: string;
      variant: MegaVariant | null;
      display: string; // e.g. "Charizard (Mega X)"
      original: string;
    }
  | {
      kind: 'regional';
      region: Region;
      baseSlug: string;
      baseDisplay: string;
      extras: string[]; // remaining tokens after region
      display: string; // e.g. "Darmanitan (Galarian – Zen)"
      original: string;
    }
  | {
      kind: 'normal';
      baseSlug: string;
      baseDisplay: string;
      extras: string[]; // any leftover tokens (non-regional, non-mega)
      display: string; // e.g. "Aegislash (Blade Forme)" or just "Weezing"
      original: string;
    };

const REGION_ADJECTIVE: Record<Region, string> = {
  alola: 'Alolan',
  galar: 'Galarian',
  hisui: 'Hisuian',
  paldea: 'Paldean',
};

const MEGA_RE = /^(?<base>[a-z0-9-]+)-mega(?:-(?<variant>x|y))?$/i;

// Some nicer base-name fixes
function prettifyBaseSlug(slug: string): string {
  const s = slug.toLowerCase();
  if (s === 'mr-mime') return 'Mr. Mime';
  if (s === 'mime-jr') return 'Mime Jr.';
  if (s === 'nidoran-f') return 'Nidoran ♀';
  if (s === 'nidoran-m') return 'Nidoran ♂';
  return s.split('-').map(titleCase).join(' ');
}

function titleCase(word: string): string {
  return word.length
    ? word[0].toUpperCase() + word.slice(1).toLowerCase()
    : word;
}

// Map common extra tokens to nicer labels
function mapExtraToken(token: string): string {
  const t = token.toLowerCase();

  // Gigantamax
  if (t === 'gmax' || t === 'gigantamax') return 'Gigantamax';

  // Aegislash, Giratina, etc.
  if (t === 'blade') return 'Blade Forme';
  if (t === 'shield') return 'Shield Forme';
  if (t === 'origin') return 'Origin Forme';
  if (t === 'altered') return 'Altered Forme';
  if (t === 'therian') return 'Therian Forme';

  // Lycanroc, etc.
  if (t === 'midday') return 'Midday Form';
  if (t === 'midnight') return 'Midnight Form';
  if (t === 'dusk') return 'Dusk Form';

  // Darmanitan (also appears with Galar)
  if (t === 'zen') return 'Zen';

  // Totem Pokémon
  if (t === 'totem') return 'Totem';

  // Greninja
  if (t === 'ash') return 'Ash';

  // Tauros breeds, Paldea patterns, etc. (keep words grouped & cased)
  if (t === 'combat') return 'Combat';
  if (t === 'blaze') return 'Blaze';
  if (t === 'aqua') return 'Aqua';
  if (t === 'breed') return 'Breed';

  // default pretty
  return titleCase(t.replace(/-/g, ' '));
}

function prettyJoin(parts: string[]): string {
  return parts.map(mapExtraToken).join(' ');
}

/**
 * Parse any PokeAPI pokemon.name into a clean display string and metadata.
 * Examples:
 *  - "charizard-mega-x"            -> "Charizard (Mega X)"
 *  - "darmanitan-galar-zen"        -> "Darmanitan (Galarian – Zen)"
 *  - "tauros-paldea-combat-breed"  -> "Tauros (Paldean – Combat Breed)"
 *  - "aegislash-blade"             -> "Aegislash (Blade Forme)"
 *  - "weezing"                     -> "Weezing"
 */
export function parsePokemonDisplay(name: string): ParsedForm {
  const original = name.toLowerCase().trim();

  // 1) Mega detection
  const mega = original.match(MEGA_RE);
  if (mega?.groups) {
    const baseSlug = mega.groups.base.toLowerCase();
    const variant =
      (mega.groups.variant?.toLowerCase() as MegaVariant | undefined) ?? null;
    const baseDisplay = prettifyBaseSlug(baseSlug);
    const display = variant
      ? `${baseDisplay} (Mega ${variant.toUpperCase()})`
      : `${baseDisplay} (Mega)`;
    return { kind: 'mega', baseSlug, baseDisplay, variant, display, original };
  }

  // 2) Regional detection
  const parts = original.split('-');
  const regionIdx = parts.findIndex(
    (p) => p === 'alola' || p === 'galar' || p === 'hisui' || p === 'paldea'
  );
  if (regionIdx !== -1) {
    const region = parts[regionIdx] as Region;
    const baseSlug = parts.slice(0, regionIdx).join('-');
    const baseDisplay = prettifyBaseSlug(baseSlug);
    const extras = parts.slice(regionIdx + 1); // e.g., ["zen"] or ["combat","breed"]
    const adjective = REGION_ADJECTIVE[region];

    const extrasDisplay = extras.length ? ` – ${prettyJoin(extras)}` : '';
    const display = `${baseDisplay} (${adjective}${extrasDisplay})`;

    return {
      kind: 'regional',
      region,
      baseSlug,
      baseDisplay,
      extras,
      display,
      original,
    };
  }

  // 3) Other non-regional, non-mega extras (e.g., aegislash-blade, charizard-gmax)
  if (parts.length > 1) {
    const baseSlug = parts[0];
    const baseDisplay = prettifyBaseSlug(baseSlug);
    const extras = parts.slice(1);
    const extrasDisplay = prettyJoin(extras);
    const display = `${baseDisplay} (${extrasDisplay})`;
    return { kind: 'normal', baseSlug, baseDisplay, extras, display, original };
  }

  // 4) Plain base
  const baseSlug = original;
  const baseDisplay = prettifyBaseSlug(baseSlug);
  return {
    kind: 'normal',
    baseSlug,
    baseDisplay,
    extras: [],
    display: baseDisplay,
    original,
  };
}

/**
 * Convenience for UI: just the formatted display
 * @param name
 */
export function getPokemonDisplayName(name: string): string {
  return parsePokemonDisplay(name).display;
}
