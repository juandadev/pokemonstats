import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { SelectedType } from '@/components/EffectivenessChart/EffectivenessChart';
import { ChevronDownIcon, ChevronUpIcon, XIcon } from 'lucide-react';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/button';

interface SelectedTypesDisplayProps {
  selectedTypes: SelectedType[];
  setSelectedTypes: Dispatch<SetStateAction<SelectedType[]>>;
}

export default function SelectedTypesDisplay({
  selectedTypes,
  setSelectedTypes,
}: SelectedTypesDisplayProps) {
  const [displaySelectedTypes, setDisplaySelectedTypes] =
    useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const isDualType = useMemo(() => selectedTypes.length === 2, [selectedTypes]);

  const clearSelectedTypes = () => {
    setSelectedTypes([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const pokemonCard = document.getElementById('pokemon-card-header');

      if (pokemonCard) {
        const rect = pokemonCard.getBoundingClientRect();
        setDisplaySelectedTypes(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!selectedTypes || selectedTypes.length === 0 || !displaySelectedTypes)
    return null;

  return (
    <div
      className={clsx(
        'fixed bottom-4 right-4 z-10 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 grid grid-cols-[auto_1fr] grid-rows-1',
        isExpanded ? 'p-4 rounded-xl' : 'p-2 rounded-lg'
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="size-5 pr-1"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {isExpanded ? (
          <ChevronDownIcon size={12} />
        ) : (
          <ChevronUpIcon size={12} />
        )}
      </Button>
      <div>
        {isExpanded && (
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">
              Selected Types{' '}
              {isDualType && (
                <span className="text-yellow-600">(Dual-Type)</span>
              )}
            </h3>
            <button
              onClick={clearSelectedTypes}
              className="ml-2 text-xs text-gray-500 hover:text-red-600 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
            >
              <XIcon className="w-3 h-3" />
              Clear
            </button>
          </div>
        )}
        <div className="flex items-center gap-3">
          {selectedTypes.map((type) => (
            <TypeBadge
              key={`selected-type-${type.type}`}
              type={type.type!}
              collapsed={!isExpanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
