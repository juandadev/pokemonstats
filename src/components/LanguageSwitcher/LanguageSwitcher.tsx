'use client';

import { useLocaleContext } from '@/i18n/LocaleProvider';
import { LOCALES } from '@/i18n/config';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleContext();

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  const currentLocale = LOCALES[locale];

  return (
    <div className="fixed top-20 right-4 z-50 md:top-24 md:right-8 transition-all duration-200">
      <Button
        onClick={toggleLocale}
        className="bg-white/95 backdrop-blur-md border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 shadow-lg hover:shadow-xl rounded-full px-4 py-2 transition-all duration-200 hover:scale-105 flex items-center gap-2"
        aria-label="Toggle language"
      >
        <span className="text-xl" aria-hidden="true">
          {currentLocale.flag}
        </span>
        <span className="text-sm font-semibold text-gray-700">
          {locale.toUpperCase()}
        </span>
      </Button>
    </div>
  );
}
