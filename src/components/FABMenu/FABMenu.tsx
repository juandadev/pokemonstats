'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { GlobeIcon, HistoryIcon, PlusIcon, ShieldIcon } from 'lucide-react';
import clsx from 'clsx';
import { useLocaleContext, LOCALES } from '@/i18n';
import SearchHistoryPanel from '@/components/FABMenu/SearchHistoryPanel';
import SelectedTypesPanel from '@/components/FABMenu/SelectedTypesPanel';
import { useTranslation } from '@/i18n';

type ActivePanel = 'history' | 'types' | null;

export default function FABMenu() {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocaleContext();
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setActivePanel(null);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close();
        triggerRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, close]);

  const toggleOpen = () => {
    if (isOpen) {
      close();
    } else {
      setIsOpen(true);
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  const togglePanel = (panel: ActivePanel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const currentLocale = LOCALES[locale];

  const actionButtons = [
    {
      key: 'language',
      label: `${currentLocale.flag} ${locale.toUpperCase()}`,
      ariaLabel: t('fab.language', 'Toggle language'),
      icon: <GlobeIcon className="w-4 h-4" />,
      onClick: toggleLocale,
    },
    {
      key: 'types',
      label: t('fab.types', 'Types'),
      ariaLabel: t('fab.types', 'Types'),
      icon: <ShieldIcon className="w-4 h-4" />,
      onClick: () => togglePanel('types'),
      active: activePanel === 'types',
    },
    {
      key: 'history',
      label: t('fab.history.label', 'History'),
      ariaLabel: t('fab.history.label', 'History'),
      icon: <HistoryIcon className="w-4 h-4" />,
      onClick: () => togglePanel('history'),
      active: activePanel === 'history',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
    >
      {isOpen && activePanel === 'history' && (
        <SearchHistoryPanel onNavigate={close} />
      )}
      {isOpen && activePanel === 'types' && <SelectedTypesPanel />}

      <div
        role="group"
        aria-label={t('fab.quickActions', 'Quick actions')}
        aria-hidden={!isOpen}
        className={clsx(
          'flex flex-col items-end gap-2',
          'transition-opacity duration-200 ease-[var(--ease-out-quint)]',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {[...actionButtons].reverse().map((button, index) => (
          <button
            key={button.key}
            onClick={button.onClick}
            aria-label={button.ariaLabel}
            tabIndex={isOpen ? 0 : -1}
            className={clsx(
              'flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-sm font-medium',
              'transition-[transform,opacity] duration-200 ease-[var(--ease-out-quint)]',
              isOpen
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-2 opacity-0 scale-95',
              button.active
                ? 'bg-blue-600 text-white'
                : 'bg-white/95 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-gray-100'
            )}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
            }}
          >
            {button.icon}
            <span>{button.label}</span>
          </button>
        ))}
      </div>

      <button
        ref={triggerRef}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="fab-panel"
        aria-label={
          isOpen ? t('fab.close', 'Close menu') : t('fab.open', 'Open menu')
        }
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-xl hover:shadow-2xl transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-out-quint)] flex items-center justify-center cursor-pointer"
      >
        <PlusIcon
          className={clsx(
            'w-6 h-6 transition-transform duration-200',
            isOpen && 'rotate-45'
          )}
        />
      </button>
    </div>
  );
}
