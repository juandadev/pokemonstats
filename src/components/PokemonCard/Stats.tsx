import { formatStatName, getStatColor } from '@/lib/utils';
import React from 'react';
import { Stat } from '@/types/pokemon.types';

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="space-y-4">
      {stats.map((statData, index) => {
        const statName = statData.stat.name;
        const baseStat = statData.base_stat;
        const maxStat = 255;
        const percentage = (baseStat / maxStat) * 100;

        return (
          <div key={index} className="flex items-center gap-4">
            <div className="w-20 text-sm font-medium text-gray-700 text-right">
              {formatStatName(statName)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${Math.min(percentage, 100)}%`,
                      backgroundColor: getStatColor(statName),
                    }}
                  />
                </div>
                <div className="w-8 text-sm font-semibold text-gray-900 text-right">
                  {baseStat}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Total Stats */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-20 text-sm font-semibold text-gray-900 text-right">
            Total
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="flex-1"></div>
              <div className="w-8 text-sm font-bold text-gray-900 text-right">
                {stats.reduce((total, stat) => total + stat.base_stat, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
