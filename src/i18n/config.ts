import { LocaleConfig } from './types';

export const LOCALE_STORAGE_KEY = 'pokemon-stats-locale';

export const LOCALES: Record<string, LocaleConfig> = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    pokeAPICode: 'en',
  },
  es: {
    code: 'es',
    name: 'Español (MX)',
    flag: '🇲🇽',
    pokeAPICode: 'es',
  },
};

export const DEFAULT_LOCALE: LocaleConfig = LOCALES.en;
