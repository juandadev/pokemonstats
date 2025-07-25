'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TYPE_LABELS, TYPES_LIST } from '@/common/constants';
import {
  EffectivenessList,
  getEffectivenessList,
  getTypeIcon,
} from '@/lib/utils';
import { PokemonTypes } from '@/types/Pokemon.type';
import { ShieldIcon, XIcon } from 'lucide-react';
import clsx from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import usePokemonData from '@/hooks/usePokemonData';

interface SelectedType {
  type: PokemonTypes | null;
  index: number | null;
}

export default function EffectivenessChart() {
  const { pokemonData } = usePokemonData();

  const [selectedTypes, setSelectedTypes] = useState<SelectedType[]>([
    {
      index: null,
      type: null,
    },
  ]);
  const [lastPokemonName, setLastPokemonName] = useState<string | null>(null);
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  const typesContainerRef = useRef<HTMLDivElement>(null);
  const typeButtonsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const effectivenessList: EffectivenessList | null = useMemo(
    () => getEffectivenessList(selectedTypes[0]?.index) || null,
    [selectedTypes]
  );
  const selectedTypesNames = useMemo(
    () => selectedTypes.map((t) => t.type),
    [selectedTypes]
  );

  const handleTypeClick = (type: SelectedType) => {
    setUserHasInteracted(true);

    if (selectedTypesNames.includes(type.type)) {
      // Remove type if already selected
      setSelectedTypes(selectedTypes.filter((t) => t.type !== type.type));
    } else if (selectedTypes.length < 2) {
      // Add type if less than 2 selected
      setSelectedTypes([...selectedTypes, type]);
    } else {
      // Replace first type if 2 already selected
      setSelectedTypes([selectedTypes[1], type]);
    }
  };

  const clearSelectedTypes = () => {
    setSelectedTypes([]);
  };

  useEffect(() => {
    if (pokemonData.name !== lastPokemonName) {
      setUserHasInteracted(false);
    }

    if (pokemonData.types && !userHasInteracted) {
      const getPokemonTypes: SelectedType[] = pokemonData.types.map((type) => {
        const typeData = TYPES_LIST.find((t) => t.name === type.type.name);

        return {
          type: typeData?.name || null,
          index: typeData?.index || null,
        };
      });

      const button = typeButtonsRef.current[getPokemonTypes[0].type!];
      const container = typesContainerRef.current;

      if (button && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const offsetLeft = buttonRect.left - containerRect.left;
        const scroll =
          offsetLeft - container.clientWidth / 2 + button.clientWidth / 2;

        container.scrollTo({
          left: container.scrollLeft + scroll,
          behavior: 'smooth',
        });
      }

      setSelectedTypes(getPokemonTypes);
      setLastPokemonName(pokemonData.name);
    }
  }, [lastPokemonName, pokemonData.name, pokemonData.types, userHasInteracted]);

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          Type Effectiveness Chart
        </CardTitle>
        <p className="text-sm text-gray-600">
          Select up to 2 types to see effectiveness{' '}
          {selectedTypes.length > 1 ? '(dual-type)' : '(single-type)'}
        </p>
      </CardHeader>
      <CardContent>
        {/* Selected Types Display */}
        {selectedTypes.length > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">
                Selected Types{' '}
                {selectedTypes.length === 2 && (
                  <span className="text-yellow-600">(Dual-Type)</span>
                )}
              </h3>
              <button
                onClick={clearSelectedTypes}
                className="text-xs text-gray-500 hover:text-red-600 transition-colors duration-200 flex items-center gap-1"
              >
                <XIcon className="w-3 h-3" />
                Clear
              </button>
            </div>
            <div className="flex items-center gap-3">
              {selectedTypes.map((type) => (
                <TypeBadge
                  key={`selected-type-${type.type}`}
                  type={type.type!}
                />
              ))}
            </div>
          </div>
        )}

        {/* Types Grid */}
        <div ref={typesContainerRef} className={'overflow-x-auto mb-3 p-1'}>
          <div className="grid grid-rows-2 grid-cols-9 lg:grid-rows-2 lg:grid-cols-6 gap-3 w-max pb-5 pt-2">
            {TYPES_LIST.map((type) => {
              const IconComponent = getTypeIcon(type.name);
              const isSelected = selectedTypes.some(
                (t) => t.type === type.name
              );

              return (
                <button
                  key={`effectiveness-${type.name}-btn`}
                  ref={(el) => {
                    typeButtonsRef.current[type.name] = el;
                  }}
                  className={clsx(
                    'group relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 cursor-pointer',
                    isSelected
                      ? `${TYPE_LABELS[type.name]?.border} shadow-lg scale-105`
                      : 'border-gray-100 hover:border-gray-200',
                    isSelected
                      ? TYPE_LABELS[type.name]?.gradientBackgroundLight
                      : 'white'
                  )}
                  onClick={() =>
                    handleTypeClick({ index: type.index, type: type.name })
                  }
                >
                  {/* Selection number mark */}
                  {isSelected && (
                    <div
                      className={clsx(
                        'absolute -top-2 -right-2 w-5 h-5 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md',
                        TYPE_LABELS[type.name]?.background
                      )}
                    >
                      {selectedTypesNames.indexOf(type.name) + 1}
                    </div>
                  )}
                  {/* Type Icon Circle */}
                  <div
                    className={clsx(
                      'w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110',
                      TYPE_LABELS[type.name]?.gradientBackground
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
                    {type.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Instructions */}
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

        {/* Effectiveness Display */}
        {selectedTypes[0]?.type && (
          <div className="space-y-6">
            {/* Super Effective */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Super Effective Against (2x)
              </h3>
              <div className="flex flex-wrap gap-2">
                {effectivenessList.superEffective.length > 0 ? (
                  effectivenessList.superEffective.map((type) => (
                    <TypeBadge key={type} type={type as PokemonTypes} />
                  ))
                ) : (
                  <span className="text-gray-500 italic">None</span>
                )}
              </div>
            </div>
            {/* Not Very Effective */}
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Not Very Effective Against (0.5x)
              </h3>
              <div className="flex flex-wrap gap-2">
                {effectivenessList.notVeryEffective.length > 0 ? (
                  effectivenessList.notVeryEffective.map((type) => (
                    <TypeBadge key={type} type={type as PokemonTypes} />
                  ))
                ) : (
                  <span className="text-gray-500 italic">None</span>
                )}
              </div>
            </div>
            {/* No Effect */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                No Effect Against (0x)
              </h3>
              <div className="flex flex-wrap gap-2">
                {effectivenessList.noEffect.length > 0 ? (
                  effectivenessList.noEffect.map((type) => (
                    <TypeBadge key={type} type={type as PokemonTypes} />
                  ))
                ) : (
                  <span className="text-gray-500 italic">None</span>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Initial state message */}
        {!selectedTypes[0]?.type && (
          <div className="text-center py-8 text-gray-500">
            <ShieldIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-lg font-medium">
              Select types above to see effectiveness
            </p>
            <p className="text-sm">
              Choose 1 type for single-type or 2 types for dual-type analysis
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
