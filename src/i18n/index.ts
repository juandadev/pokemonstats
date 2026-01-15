// Main exports for the i18n system
export { LocaleProvider, useLocaleContext } from './LocaleProvider';
export { useTranslation } from './useTranslation';
export { getPokeAPILanguage, findByLanguage } from './utils';
export { LOCALES, DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from './config';
export type {
  Locale,
  PokeAPILanguage,
  LocaleConfig,
  Translations,
  TranslationKey,
} from './types';
