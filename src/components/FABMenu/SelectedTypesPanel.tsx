'use client';

import { useSelectedTypes } from '@/context/SelectedTypesContext';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import { ShieldIcon, SwordIcon, XIcon } from 'lucide-react';
import { useTranslation } from '@/i18n';

export default function SelectedTypesPanel() {
  const { t } = useTranslation();
  const { selectedTypes, setSelectedTypes, effectivenessMode } =
    useSelectedTypes();

  const isDualType = selectedTypes.length === 2;

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-4 w-80 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
          {effectivenessMode === 'offensive' ? (
            <SwordIcon className="w-3.5 h-3.5" />
          ) : (
            <ShieldIcon className="w-3.5 h-3.5" />
          )}
          {t('effectiveness.selectedTypes.title', 'Selected Types')}
          {isDualType && (
            <span className="text-yellow-600 ml-1">
              {t('effectiveness.selectedTypes.dualType', '(Dual-Type)')}
            </span>
          )}
        </h3>
        {selectedTypes.length > 0 && (
          <button
            onClick={() => setSelectedTypes([])}
            className="text-xs text-gray-500 hover:text-red-600 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
            aria-label={t('common.buttons.clear', 'Clear')}
          >
            <XIcon className="w-3 h-3" />
            {t('common.buttons.clear', 'Clear')}
          </button>
        )}
      </div>
      {selectedTypes.length === 0 ? (
        <p className="text-sm text-gray-500">
          {t(
            'effectiveness.selectedTypes.noTypesSelected',
            'No types selected'
          )}
        </p>
      ) : (
        <div className="flex items-center gap-2">
          {selectedTypes.map((type) => (
            <TypeBadge key={`fab-type-${type.type}`} type={type.type} />
          ))}
        </div>
      )}
    </div>
  );
}
