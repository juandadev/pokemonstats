'use client';

import { GameVersion } from '@/types/pokemon.types';
import React, { useMemo, useState } from 'react';
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
import { MoveDisplayData } from '@/types/moves.types';
import { formatGameVersion } from '@/lib/utils';
import { getPreferences, setPreferences } from '@/lib/preferences';

interface MovesProps {
  moves: MoveDisplayData[];
}

export default function Moves({ moves }: MovesProps) {
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

  const renderMoveList = useMemo(() => {
    const filteredMovesByGame = moves
      .filter((move) =>
        move.gameDetails.find((item) => item.game === selectedGame)
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
      const displayName = move.name.replace(/-/g, ' ');
      const getDetailsByGame =
        move.gameDetails.find(
          (gameDetail) => gameDetail.game === selectedGame
        ) || move.gameDetails[0];

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
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                    {getDetailsByGame.level}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 capitalize">
                      {displayName}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <TypeBadge type={move.type} />
                      {move.power && (
                        <span className="text-xs text-gray-500">
                          Power: {move.power}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        PP: {move.pp}
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
                {getDetailsByGame.description}
              </p>
              <div className="mt-2 flex flex-col gap-2 text-xs text-gray-500">
                {move.accuracy && <span>{move.accuracy}% accuracy</span>}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    });
  }, [moves, selectedGame]);

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
          <Accordion type="single" collapsible className="space-y-2 pr-2">
            {renderMoveList}
          </Accordion>
        </div>
      ) : (
        <div className="px-4 py-3">
          <div className="flex items-center justify-center text-xs text-gray-500">
            <span>Select a game version to display the move list</span>
          </div>
        </div>
      )}
    </>
  );
}
