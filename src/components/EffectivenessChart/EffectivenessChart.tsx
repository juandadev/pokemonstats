'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TYPE_LABELS, TYPES_LIST } from '@/common/constants';
import { getEffectivenessList, getTypeIcon } from '@/lib/utils';
import { PokemonTypes } from '@/types/Pokemon.type';
import { ShieldIcon } from 'lucide-react';
import clsx from 'clsx';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import usePokemonData from '@/hooks/usePokemonData';

interface SelectedType {
  type: PokemonTypes | null;
  index: number | null;
}

export default function EffectivenessChart() {
  const { pokemonData } = usePokemonData();

  const [selectedType, setSelectedType] = useState<SelectedType>({
    type: null,
    index: null,
  });
  const [lastPokemonName, setLastPokemonName] = useState<string | null>(null);
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  const typesContainerRef = useRef<HTMLDivElement>(null);
  const typeButtonsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const effectivenessList = useMemo(
    () => getEffectivenessList(selectedType.index),
    [selectedType.index]
  );

  const handleTypeClick = (type: { name: PokemonTypes; index: number }) => {
    setUserHasInteracted(true);
    setSelectedType({
      type: type.name,
      index: type.index,
    });
  };

  useEffect(() => {
    if (pokemonData.name !== lastPokemonName) {
      setUserHasInteracted(false);
    }

    if (pokemonData.types && !userHasInteracted) {
      const typeInfo = TYPES_LIST.find(
        (type) => type.name === pokemonData.types[0].type.name
      )!;

      const button = typeButtonsRef.current[typeInfo.name];
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

      setSelectedType({ type: typeInfo.name, index: typeInfo.index });
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
          Select any type to see its effectiveness against other types
        </p>
      </CardHeader>
      <CardContent>
        {/* Types Grid */}
        <div ref={typesContainerRef} className={'overflow-x-auto mb-8 p-1'}>
          <div className="grid grid-rows-2 grid-cols-9 lg:grid-rows-2 lg:grid-cols-6 gap-3 w-max pb-5">
            {TYPES_LIST.map((type) => {
              const IconComponent = getTypeIcon(type.name);
              const isSelected = selectedType.type === type.name;

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
                  onClick={() => handleTypeClick(type)}
                >
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
        {/* Effectiveness Display */}
        {selectedType.type && (
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
        {!selectedType.type && (
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
  );
}
