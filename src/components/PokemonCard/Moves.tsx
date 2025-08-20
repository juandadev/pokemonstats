'use client';

import { GameVersion, Move } from '@/types/pokemon.types';
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

interface MovesProps {
  moves: Move[];
}

export default function Moves({ moves }: MovesProps) {
  const [selectedGame, setSelectedGame] = useState<GameVersion>('');

  const renderMoveList = useMemo(
    () =>
      moves
        .sort(
          (a, b) =>
            a.version_group_details[0].level_learned_at -
            b.version_group_details[0].level_learned_at
        )
        .filter((item) => item.version_group_details[0].level_learned_at > 0)
        .map((move, index) => {
          const displayName = move.move.name.replace(/-/g, ' ');
          const levelLearned = move.version_group_details[0].level_learned_at;

          return (
            <AccordionItem
              value={move.move.name}
              key={`move-${move.move.name}-position-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="p-3 text-left hover:bg-gray-50 transition-colors duration-200 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                        {levelLearned}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 capitalize">
                          {displayName}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <TypeBadge type="normal" />
                          <span className="text-xs text-gray-500">
                            Power: 50
                          </span>

                          <span className="text-xs text-gray-500">PP: 10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* TODO: Move this to AccordionContent */}
                  <span className="text-xs text-gray-500 hidden sm:block">
                    100% accuracy
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          );
        }),
    [moves]
  );

  return (
    <>
      <Select defaultValue={selectedGame} onValueChange={setSelectedGame}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Game version" />
        </SelectTrigger>
        <SelectContent>
          {GAME_LIST.map((game) => (
            <SelectItem key={game} value={game}>
              {game}
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
