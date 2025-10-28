import React, { Fragment, useMemo } from 'react';
import Image from 'next/image';
import { EVOLUTION_DETAILS } from '@/common/constants/evolutions';
import { Separator } from '@/components/ui/separator';
import { buildAdditionalDetailsList } from '@/lib/utils';
import { EvolutionDetails as EvolutionDetail } from '@/types/evolutions.types';

interface EvolutionDetailsProps {
  pokemonName: string;
  details: Partial<EvolutionDetail>[];
}

export default function EvolutionDetails({
  pokemonName,
  details,
}: EvolutionDetailsProps) {
  const renderDetailsList = useMemo(
    () =>
      details.map((detail, index) => {
        const triggerInfo = EVOLUTION_DETAILS(
          detail.trigger?.name || 'default'
        ).trigger;
        const additionalDetailsList = buildAdditionalDetailsList(detail);

        return (
          <Fragment key={`${pokemonName}-evolution-detail-${index}`}>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-semibold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                {/* Trigger Method */}
                <div className="flex items-center gap-2">
                  {triggerInfo.icon}
                  <span className="text-sm font-medium text-gray-900">
                    {triggerInfo.label}
                  </span>
                </div>
                <div className="space-y-1.5 text-sm text-gray-600">
                  {additionalDetailsList.map((item, index) => {
                    return (
                      <div
                        key={`${pokemonName}-evolution-variation-${index}`}
                        className="flex items-center gap-2"
                      >
                        {!item.icon && !item.image && (
                          <div className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                        )}
                        {item.icon}
                        {item.image && (
                          <Image
                            width={20}
                            height={20}
                            src={item.image}
                            alt="Item Sprite"
                            className="w-7 h-7 object-contain"
                          />
                        )}
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {index !== details.length - 1 && <Separator className="my-5" />}
          </Fragment>
        );
      }),
    [details, pokemonName]
  );

  if (details.length === 0) return null;

  return (
    <div className="mx-3 bg-white border border-gray-200 rounded-lg shadow-sm overflow-y-auto">
      <div className="divide-y divide-gray-100">
        <div className="p-4 space-y-2">{renderDetailsList}</div>
      </div>
    </div>
  );
}
