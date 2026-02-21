'use client';

import React, { createContext, useContext, useState } from 'react';
import { EffectivenessMode, SelectedType } from '@/types';
import { getPreferences } from '@/lib/preferences';

interface SelectedTypesContextValue {
  selectedTypes: SelectedType[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<SelectedType[]>>;
  effectivenessMode: EffectivenessMode;
  setEffectivenessMode: React.Dispatch<React.SetStateAction<EffectivenessMode>>;
}

const SelectedTypesContext = createContext<SelectedTypesContextValue | undefined>(
  undefined
);

export function SelectedTypesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const preferences = getPreferences();
  const [selectedTypes, setSelectedTypes] = useState<SelectedType[]>([]);
  const [effectivenessMode, setEffectivenessMode] =
    useState<EffectivenessMode>(preferences.chartMode);

  return (
    <SelectedTypesContext.Provider
      value={{
        selectedTypes,
        setSelectedTypes,
        effectivenessMode,
        setEffectivenessMode,
      }}
    >
      {children}
    </SelectedTypesContext.Provider>
  );
}

export function useSelectedTypes() {
  const context = useContext(SelectedTypesContext);
  if (!context) {
    throw new Error(
      'useSelectedTypes must be used within SelectedTypesProvider'
    );
  }
  return context;
}
