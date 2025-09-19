'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  EffectivenessList,
  getEffectivenessList,
  getTypeIcon,
} from '@/lib/utils';
import { PokemonData, PokemonTypes } from '@/types/pokemon.types';
import { ShieldIcon, SwordIcon, XIcon } from 'lucide-react';
import clsx from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import SelectedTypesDisplay from '@/components/EffectivenessChart/SelectedTypesDisplay';
import { Button } from '@/components/ui/button';
import { EffectivenessMode } from '@/types';
import { getPreferences, setPreferences } from '@/lib/preferences';
import { TYPE_LABELS, TYPES_LIST } from '@/common/constants/pokemonTypes';

export interface SelectedType {
  type: PokemonTypes;
  index: number;
}

interface EffectivenessChartProps {
  pokemonData: PokemonData;
}

export default function EffectivenessChart({
  pokemonData,
}: EffectivenessChartProps) {
  const preferences = getPreferences();

  const [selectedTypes, setSelectedTypes] = useState<SelectedType[]>([]);
  const [lastPokemonName, setLastPokemonName] = useState<string | null>(null);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [isInformationMessageClosed, setIsInformationMessageClosed] =
    useState<boolean>(preferences.msgClosed);
  const [effectivenessMode, setEffectivenessMode] = useState<EffectivenessMode>(
    preferences.chartMode
  );

  const typesContainerRef = useRef<HTMLDivElement>(null);
  const typeButtonsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const selectedTypesNames = useMemo(
    () => selectedTypes.map((t) => t.type) || [],
    [selectedTypes]
  );
  const selectedTypesIndexes = useMemo(
    () => selectedTypes.map((t) => t.index) || [],
    [selectedTypes]
  );
  const effectivenessList: EffectivenessList | null = useMemo(
    () => getEffectivenessList(selectedTypesIndexes, effectivenessMode),
    [effectivenessMode, selectedTypesIndexes]
  );
  const isDualType = useMemo(() => selectedTypes.length === 2, [selectedTypes]);

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

  const handleTabChange = (value: EffectivenessMode) => {
    setEffectivenessMode(value);
    setPreferences({ chartMode: value });
  };

  const handleMessageClose = () => {
    setIsInformationMessageClosed(true);
    setPreferences({ msgClosed: true });
  };

  useEffect(() => {
    if (pokemonData.name !== lastPokemonName) {
      setUserHasInteracted(false);
    }

    if (pokemonData.types && !userHasInteracted) {
      const getPokemonTypes: SelectedType[] = pokemonData.types.map((type) => {
        const typeData = TYPES_LIST.find((t) => t.name === type.type.name);

        return {
          type: typeData!.name,
          index: typeData!.index,
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
    <>
      <SelectedTypesDisplay
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        effectivenessMode={effectivenessMode}
      />
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl heading">
            Type Effectiveness Chart
          </CardTitle>
          <p className="text-sm text-gray-600">
            Select up to 2 types to see effectiveness{' '}
            {selectedTypes.length > 1 ? '(dual-type)' : '(single-type)'}
          </p>
        </CardHeader>
        <CardContent>
          {/* Mode Toggle */}
          <div className="mb-6">
            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
              <button
                onClick={() => handleTabChange('offensive')}
                className={clsx(
                  `flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer`,
                  effectivenessMode === 'offensive'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <div className="flex items-center justify-center gap-2">
                  <SwordIcon className="w-4 h-4" />
                  <span>Attacker</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  What can I hit?
                </div>
              </button>
              <button
                onClick={() => handleTabChange('defensive')}
                className={clsx(
                  `flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer`,
                  effectivenessMode === 'defensive'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <div className="flex items-center justify-center gap-2">
                  <ShieldIcon className="w-4 h-4" />
                  <span>Defender</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">What hits me?</div>
              </button>
            </div>
          </div>

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
                        ? `${
                            TYPE_LABELS[type.name]?.border
                          } shadow-lg scale-105`
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
                      <IconComponent className="size-6 text-white" />
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
              {isDualType && !isInformationMessageClosed && (
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg grid grid-cols-[1fr_auto] grid-rows-1">
                  <p className="text-sm text-purple-800 font-medium">
                    🔥 Dual-Type Analysis:{' '}
                    {effectivenessMode === 'offensive'
                      ? `Showing combined effectiveness of ${selectedTypes[0].type} + ${selectedTypes[1].type} moves.
                    Actual damage will depend on the specific move type used.`
                      : `Showing what types are effective against ${selectedTypes[0].type}/${selectedTypes[1].type} Pokémon`}
                  </p>
                  <Button
                    onClick={handleMessageClose}
                    variant="ghost"
                    size="icon"
                    className="size-6 md:size-7"
                  >
                    <XIcon className="w-3 h-3" />
                  </Button>
                </div>
              )}
              {/* Super Effective */}
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  {effectivenessMode === 'offensive'
                    ? 'Super Effective Against (2x)'
                    : 'Weak To (4x - 2x)'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {effectivenessList['4x'].length > 0 &&
                    effectivenessList['4x'].map((type) => (
                      <TypeBadge
                        key={type}
                        type={type as PokemonTypes}
                        effectivenessLabel={
                          effectivenessMode === 'defensive' ? '4x' : ''
                        }
                      />
                    ))}
                  {effectivenessList['2x'].length > 0 &&
                    effectivenessList['2x'].map((type) => (
                      <TypeBadge
                        key={type}
                        type={type as PokemonTypes}
                        effectivenessLabel={
                          effectivenessMode === 'defensive' ? '2x' : ''
                        }
                      />
                    ))}
                  {effectivenessList['4x'].length === 0 &&
                    effectivenessList['2x'].length === 0 && (
                      <span className="text-gray-500 italic">None</span>
                    )}
                </div>
              </div>
              {/* Not Very Effective */}
              <div>
                <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  {effectivenessMode === 'offensive'
                    ? 'Not Very Effective Against (0.5x)'
                    : 'Resistant To (0.5 - 0.25×)'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {effectivenessList['0.5'].length > 0 &&
                    effectivenessList['0.5'].map((type) => (
                      <TypeBadge
                        key={type}
                        type={type as PokemonTypes}
                        effectivenessLabel={
                          effectivenessMode === 'defensive' ? '0.5x' : ''
                        }
                      />
                    ))}
                  {effectivenessList['0.25'].length > 0 &&
                    effectivenessList['0.25'].map((type) => (
                      <TypeBadge
                        key={type}
                        type={type as PokemonTypes}
                        effectivenessLabel={
                          effectivenessMode === 'defensive' ? '0.25x' : ''
                        }
                      />
                    ))}
                  {effectivenessList['0.5'].length === 0 &&
                    effectivenessList['0.25'].length === 0 && (
                      <span className="text-gray-500 italic">None</span>
                    )}
                </div>
              </div>
              {/* No Effect */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  {effectivenessMode === 'offensive'
                    ? 'No Effect (0x)'
                    : 'Immune To (0×)'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {effectivenessList['0'].length > 0 ? (
                    effectivenessList['0'].map((type) => (
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
    </>
  );
}
