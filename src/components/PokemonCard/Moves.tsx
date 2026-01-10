'use client';

import { GameVersion } from '@/types/pokemon.types';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TypeBadge from '@/components/TypeBadge/TypeBadge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GAME_LIST } from '@/common/constants/games';
import { LearnMethodType, MoveDisplayData } from '@/types/moves.types';
import { formatGameVersion } from '@/lib/utils';
import { getPreferences, setPreferences } from '@/lib/preferences';
import PhysicalDmgIcon from '@/icons/PhysicalDmgIcon';
import SpecialDmgIcon from '@/icons/SpecialDmgIcon';
import StatusEffectIcon from '@/icons/StatusEffectIcon';
import Image from 'next/image';
import { useTranslation } from '@/i18n';
import { findByLanguage } from '@/i18n/utils';

interface MovesProps {
  moves: MoveDisplayData[];
}

export default function Moves({ moves }: MovesProps) {
  const { t, locale } = useTranslation();
  const preferences = getPreferences();
  const gameVersionList = useMemo(() => {
    const set = new Set<GameVersion>();

    for (const move of moves) {
      for (const version of move.gameDetails) {
        set.add(version.game);
      }
    }

    const unique = Array.from(set);

    return unique.sort((a, b) => GAME_LIST.indexOf(a) - GAME_LIST.indexOf(b));
  }, [moves]);
  const isGameInList = gameVersionList.some(
    (version) => version === preferences.game
  );

  const [selectedGame, setSelectedGame] = useState<GameVersion>(
    isGameInList ? preferences.game || gameVersionList[0] : gameVersionList[0]
  );

  const handleGameSelect = (value: string) => {
    setSelectedGame(value as GameVersion);
    setPreferences({ game: value as GameVersion });
  };

  const renderMoveList = useCallback(
    (type: LearnMethodType) => {
      const filteredMovesByGame = moves
        .filter((move) =>
          move.gameDetails.find(
            (item) => item.game === selectedGame && item.learnMethod === type
          )
        )
        .sort((a, b) => {
          const firstEl = a.gameDetails.find(
            (item) => item.game === selectedGame
          )!;
          const secondEl = b.gameDetails.find(
            (item) => item.game === selectedGame
          )!;

          return firstEl.level - secondEl.level;
        });

      return filteredMovesByGame.map((move, index) => {
        const localizedName =
          findByLanguage(move.names, locale)?.name ||
          move.name.replace(/-/g, ' ');
        const getDetailsByGame =
          move.gameDetails.find(
            (item) => item.game === selectedGame && item.learnMethod === type
          ) || move.gameDetails[0];
        const localizedDescription =
          findByLanguage(move.effectEntries, locale)?.effect ||
          getDetailsByGame.description;

        return (
          <AccordionItem
            value={move.name}
            key={`move-${move.name}-position-${index}`}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="p-3 text-left hover:bg-gray-50 transition-colors duration-200 hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    {getDetailsByGame.learnMethod === 'machine' ? (
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-${move.type}.png`}
                        alt={`${move.type} TM sprite`}
                        width={30}
                        height={30}
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                        {getDetailsByGame.level}
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900 capitalize flex gap-2 items-center">
                        {move.damageClass === 'physical' && (
                          <PhysicalDmgIcon
                            size={15}
                            className="text-muted-foreground"
                          />
                        )}
                        {move.damageClass === 'special' && (
                          <SpecialDmgIcon
                            size={13}
                            className="text-muted-foreground"
                          />
                        )}
                        {move.damageClass === 'status' && (
                          <StatusEffectIcon
                            size={13}
                            className="text-muted-foreground"
                          />
                        )}
                        {localizedName}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <TypeBadge type={move.type} />
                        {move.power && (
                          <span className="text-xs text-gray-500 font-bold">
                            {t('moves.labels.power', 'Power')}: {move.power}
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          {t('moves.labels.pp', 'PP')}: {move.pp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-3 pb-3 border-t border-gray-100 bg-gray-50">
              <div className="pt-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {localizedDescription}
                </p>
                <div className="mt-2 flex flex-col gap-2 text-xs text-gray-500">
                  {move.accuracy && (
                    <span>
                      {move.accuracy}% {t('moves.labels.accuracy', 'accuracy')}
                    </span>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      });
    },
    [moves, selectedGame, t, locale]
  );

  return (
    <>
      <Select value={selectedGame} onValueChange={handleGameSelect}>
        <SelectTrigger className="w-full capitalize">
          <SelectValue placeholder="Game version" />
        </SelectTrigger>
        <SelectContent>
          {gameVersionList.map((game) => (
            <SelectItem key={game} value={game} className="capitalize">
              {formatGameVersion(game)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedGame ? (
        <div className="h-96 overflow-y-auto mt-3">
          <Accordion
            type="single"
            collapsible
            defaultValue="lvl-up"
            className="space-y-2 pr-3"
          >
            <AccordionItem value="machine">
              <AccordionTrigger>
                {t('moves.sections.machines', 'Machines')}
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {renderMoveList('machine')}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="lvl-up">
              <AccordionTrigger>
                {t('moves.sections.levelUp', 'Level Up')}
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {renderMoveList('level-up')}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <div className="px-4 py-3">
          <div className="flex items-center justify-center text-xs text-gray-500">
            <span>
              {t(
                'moves.instruction',
                'Select a game version to display the move list'
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
