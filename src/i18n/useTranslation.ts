import { useLocaleContext } from './LocaleProvider';

/**
 * Translation hook for components
 * Returns a `t` function that accepts a translation key and default English value
 *
 * @example
 * const { t, locale } = useTranslation();
 * <button>{t('common.buttons.close', 'Close')}</button>
 */
export function useTranslation() {
  const { locale, translations } = useLocaleContext();

  /**
   * Translate a key to the current locale
   * @param key - Dot-separated translation key (e.g., 'common.buttons.close')
   * @param defaultValue - Default English text to show if translation missing
   * @returns Translated string or default value
   */
  const t = (key: string, defaultValue: string): string => {
    if (locale === 'en' || !translations) {
      return defaultValue;
    }

    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Missing translation for key: ${key}`);
        }
        return defaultValue;
      }
    }

    return typeof value === 'string' ? value : defaultValue;
  };

  return { t, locale };
}
