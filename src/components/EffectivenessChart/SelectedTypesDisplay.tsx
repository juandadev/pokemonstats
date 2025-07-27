import { Dispatch, SetStateAction, useMemo } from 'react';
import { SelectedType } from '@/components/EffectivenessChart/EffectivenessChart';
import { XIcon } from 'lucide-react';
import TypeBadge from '@/components/TypeBadge/TypeBadge';

interface SelectedTypesDisplayProps {
  selectedTypes: SelectedType[];
  setSelectedTypes: Dispatch<SetStateAction<SelectedType[]>>;
}

export default function SelectedTypesDisplay({
  selectedTypes,
  setSelectedTypes,
}: SelectedTypesDisplayProps) {
  const isDualType = useMemo(() => selectedTypes.length === 2, [selectedTypes]);

  const clearSelectedTypes = () => {
    setSelectedTypes([]);
  };

  if (!selectedTypes || selectedTypes.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-10 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Selected Types{' '}
          {isDualType && <span className="text-yellow-600">(Dual-Type)</span>}
        </h3>
        <button
          onClick={clearSelectedTypes}
          className="ml-2 text-xs text-gray-500 hover:text-red-600 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
        >
          <XIcon className="w-3 h-3" />
          Clear
        </button>
      </div>
      <div className="flex items-center gap-3">
        {selectedTypes.map((type) => (
          <TypeBadge key={`selected-type-${type.type}`} type={type.type!} />
        ))}
      </div>
    </div>
  );
}
