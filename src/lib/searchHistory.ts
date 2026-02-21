import { PokemonIndexItem } from '@/types/pokemon.types';

const STORAGE_KEY = 'search-history';
const MAX_ENTRIES = 5;

export function getSearchHistory(): PokemonIndexItem[] {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];

  return JSON.parse(stored) as PokemonIndexItem[];
}

export function addToSearchHistory(entry: PokemonIndexItem): void {
  if (typeof window === 'undefined') return;

  const history = getSearchHistory();
  const filtered = history.filter((item) => item.slug !== entry.slug);
  const updated = [entry, ...filtered].slice(0, MAX_ENTRIES);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
