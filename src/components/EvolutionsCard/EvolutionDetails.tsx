import { SparklesIcon } from 'lucide-react';
import { EvolutionDetailDisplay } from '@/types/Pokemon.type';
import React from 'react';

interface EvolutionDetailsProps {
  pokemonName: string;
  details: EvolutionDetailDisplay[];
}

export default function EvolutionDetails({
  pokemonName,
  details,
}: EvolutionDetailsProps) {
  if (details.length === 0) return null;

  return (
    <div className="mx-3 bg-white border border-gray-200 rounded-lg shadow-sm overflow-y-scroll">
      <div className="divide-y divide-gray-100">
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-semibold text-blue-600">1</span>
            </div>
            <div className="flex-1 space-y-2">
              {/* Trigger Method */}
              <div className="flex items-center gap-2">
                {details[0].icon}
                <span className="text-sm font-medium text-gray-900">
                  {details[0].label}
                </span>
              </div>
              <div className="space-y-1.5 text-sm text-gray-600">
                {details.slice(1).map((detail, index) => (
                  <div
                    key={`${pokemonName}-evolution-${index}`}
                    className="flex items-center gap-2"
                  >
                    {detail.icon || (
                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    )}
                    {detail.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
