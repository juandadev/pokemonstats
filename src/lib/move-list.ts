import { Move } from '@/types/pokemon.types';
import {
  MoveApiData,
  MoveDisplayData,
  MoveGameDetails,
} from '@/types/moves.types';

export async function buildMoveList(moves: Move[]): Promise<MoveDisplayData[]> {
  const filteredMoves = moves.filter(
    (item) => item.version_group_details[0].level_learned_at > 0
  );
  const moveList: MoveDisplayData[] = [];

  for (const move of filteredMoves) {
    const response = await fetch(move.move.url, {
      cache: 'force-cache',
    });
    const data = (await response.json()) as MoveApiData;
    const moveEntry = filteredMoves.find(
      (item) => item.move.name === data.name
    )!;

    const mapMoveDetailsByGame: MoveGameDetails[] =
      moveEntry.version_group_details.map((item) => {
        const getDescriptionByGame =
          data.flavor_text_entries.find(
            (description) =>
              description.version_group.name === item.version_group.name &&
              description.language.name === 'en'
          )?.flavor_text || data.flavor_text_entries[0].flavor_text;

        return {
          level: item.level_learned_at,
          description: getDescriptionByGame,
          game: item.version_group.name,
        };
      });

    moveList.push({
      accuracy: data.accuracy,
      gameDetails: mapMoveDetailsByGame,
      name: data.name,
      power: data.power,
      pp: data.pp,
      type: data.type.name,
    });
  }

  return moveList;
}
