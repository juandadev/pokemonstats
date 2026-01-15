'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, Translations } from './types';
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from './config';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: Translations | null;
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE.code);
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    async function loadTranslations() {
      if (locale === 'en') {
        setTranslations(null);
        return;
      }

      setIsLoading(true);
      try {
        const myModule = await import(`./locales/${locale}/index`);
        setTranslations(myModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        setTranslations(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, translations, isLoading }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return context;
}
