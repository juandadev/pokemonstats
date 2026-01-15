'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import clsx from 'clsx';
import { ShieldIcon, SwordIcon } from 'lucide-react';
import { getTypeIcon } from '@/lib/utils';
import { TYPE_LABELS, TYPES_LIST } from '@/common/constants/pokemonTypes';
import { useTranslation } from '@/i18n';
import { PokemonTypes } from '@/types/pokemon.types';

export default function EffectivenessChartSuspense() {
  const { t } = useTranslation();

  const getTypeLabel = (type: PokemonTypes) => {
    const capitalize = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);
    return t(`stats.types.${type}`, capitalize(type));
  };
  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          Type Effectiveness Chart
        </CardTitle>
        <p className="text-sm text-gray-600">
          Select up to 2 types to see effectiveness
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
            <button className="flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer bg-white text-gray-900 shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <SwordIcon className="w-4 h-4" />
                <span>Attacker</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">What can I hit?</div>
            </button>
            <button className="flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <ShieldIcon className="w-4 h-4" />
                <span>Defender</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">What hits me?</div>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mb-3 p-1">
          <div className="grid grid-rows-2 grid-cols-9 lg:grid-rows-2 lg:grid-cols-6 gap-3 w-max pb-5 pt-2">
            {TYPES_LIST.map((type) => {
              const IconComponent = getTypeIcon(type.name);

              return (
                <button
                  key={`effectiveness-${type.name}-btn`}
                  className="group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 cursor-pointer border-gray-100 hover:border-gray-200 white"
                >
                  <div
                    className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110',
                      TYPE_LABELS[type.name]?.gradientBackground
                    )}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold transition-colors duration-300 text-gray-600">
                    {getTypeLabel(type.name)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-2 mb-3">
          <div className="text-xs text-gray-500 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              Scroll horizontally • Tap to select up to 2 types
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
