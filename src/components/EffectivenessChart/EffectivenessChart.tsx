'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TYPE_LABELS } from '@/common/constants';
import { getTypeIcon } from '@/lib/utils';
import { PokemonTypes } from '@/types/Pokemon.type';
import { DropletIcon, FlameIcon, ShieldIcon } from 'lucide-react';
import clsx from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';

export default function EffectivenessChart() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div>
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Type Effectiveness Chart
          </CardTitle>
          <p className="text-sm text-gray-600">
            Select any type to see its effectiveness against other types
          </p>
        </CardHeader>
        <CardContent>
          {/* Types Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
            {Object.keys(TYPE_LABELS).map((type) => {
              const IconComponent = getTypeIcon(type as PokemonTypes);
              const isSelected = selectedType === type;

              return (
                <button
                  key={type}
                  className={clsx(
                    'group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2',
                    isSelected
                      ? `${
                          TYPE_LABELS[type as PokemonTypes]?.border
                        } shadow-lg scale-105`
                      : 'border-gray-100 hover:border-gray-200',
                    isSelected
                      ? TYPE_LABELS[type as PokemonTypes]
                          ?.gradientBackgroundLight
                      : 'white'
                  )}
                  onClick={() => setSelectedType(type)}
                >
                  {/* Type Icon Circle */}
                  <div
                    className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110',
                      TYPE_LABELS[type as PokemonTypes]?.gradientBackground
                    )}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {/* Type Name */}
                  <span
                    className={clsx(
                      'text-xs font-semibold capitalize transition-colors duration-300',
                      isSelected ? 'text-gray-900' : 'text-gray-600'
                    )}
                  >
                    {type}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Effectiveness Display */}
          {selectedType && (
            <div className="space-y-6">
              {/* Super Effective */}
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Super Effective (2x)
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TypeBadge type={'fire'} />
                </div>
              </div>
              {/* Not Very Effective */}
              <div>
                <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  Not Very Effective (0.5x)
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TypeBadge type={'water'} />
                </div>
              </div>
              {/* No Effect */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  No Effect (0x)
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-500 italic">None</span>
                </div>
              </div>
            </div>
          )}
          {/* Initial state message */}
          {!selectedType && (
            <div className="text-center py-8 text-gray-500">
              <ShieldIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">
                Select a type above to see effectiveness
              </p>
              <p className="text-sm">
                Click on any type icon to view its strengths and weaknesses
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
