'use client';

import { getStatColor } from '@/lib/utils';
import { Stat } from '@/types/pokemon.types';
import { useTranslation } from '@/i18n';

interface StatsProps {
  stats: Stat[];
}

const STAT_KEYS: Record<string, string> = {
  hp: 'stats.names.hp',
  attack: 'stats.names.attack',
  defense: 'stats.names.defense',
  'special-attack': 'stats.names.specialAttack',
  'special-defense': 'stats.names.specialDefense',
  speed: 'stats.names.speed',
};

const STAT_DEFAULTS: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Attack',
  'special-defense': 'Sp. Defense',
  speed: 'Speed',
};

export default function Stats({ stats }: StatsProps) {
  const { t } = useTranslation();

  const formatStatName = (statName: string): string => {
    const key = STAT_KEYS[statName];
    const defaultValue = STAT_DEFAULTS[statName] || statName;
    return key ? t(key, defaultValue) : defaultValue;
  };

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
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-20 text-sm font-semibold text-gray-900 text-right">
            {t('stats.names.total', 'Total')}
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
