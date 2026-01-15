import { Locale, PokeAPILanguage } from './types';
import { LOCALES } from './config';

/**
 * Get the PokeAPI language code for a given locale
 */
export function getPokeAPILanguage(locale: Locale): PokeAPILanguage {
  return LOCALES[locale].pokeAPICode;
}

/**
 * Helper to filter PokeAPI language arrays by locale
 * Finds an entry matching the current locale, with fallback to English
 *
 * @param entries - Array of objects with language.name property
 * @param locale - Current locale
 * @param fallback - Fallback locale (default: 'en')
 * @returns The matching entry or undefined
 */
export function findByLanguage<T extends { language: { name: string } }>(
  entries: T[],
  locale: Locale,
  fallback: Locale = 'en'
): T | undefined {
  const language = getPokeAPILanguage(locale);
  const fallbackLanguage = getPokeAPILanguage(fallback);

  return (
    entries.find((entry) => entry.language.name === language) ||
    entries.find((entry) => entry.language.name === fallbackLanguage)
  );
}
