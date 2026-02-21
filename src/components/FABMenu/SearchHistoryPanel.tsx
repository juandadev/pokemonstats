'use client';

import { useState } from 'react';
import Link from 'next/link';
import { track } from '@databuddy/sdk';
import PokemonImage from '@/components/PokemonImage/PokemonImage';
import { PokemonIndexItem } from '@/types/pokemon.types';
import { getSearchHistory } from '@/lib/searchHistory';
import { useTranslation } from '@/i18n';

interface SearchHistoryPanelProps {
  onNavigate: () => void;
}

export default function SearchHistoryPanel({
  onNavigate,
}: SearchHistoryPanelProps) {
  const { t } = useTranslation();
  const [history] = useState<PokemonIndexItem[]>(() => getSearchHistory());

  if (history.length === 0) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-4 w-64 animate-in fade-in slide-in-from-bottom-2">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          {t('fab.history.title', 'Recent Pokemon')}
        </h3>
        <p className="text-sm text-gray-500">
          {t(
            'fab.history.empty',
            'No history yet. Visit a Pokemon to get started!'
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-4 w-64 animate-in fade-in slide-in-from-bottom-2">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        {t('fab.history.title', 'Recent Pokemon')}
      </h3>
      <ul role="list" className="space-y-1">
        {history.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={`/${entry.slug}#main`}
              onClick={() => {
                void track('pokemon_navigated', {
                  source: 'history',
                  pokemon: entry.slug,
                });
                onNavigate();
              }}
              aria-label={`Go to ${entry.label}`}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            >
              <PokemonImage
                artUrl={entry.sprite}
                alt={entry.label}
                width={32}
                height={32}
                unoptimized
              />
              <span className="text-sm font-medium text-gray-700">
                {entry.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
