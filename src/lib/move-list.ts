import { Move } from '@/types/pokemon.types';
import {
  MoveApiData,
  MoveDisplayData,
  MoveGameDetails,
} from '@/types/moves.types';

export async function buildMoveList(moves: Move[]): Promise<MoveDisplayData[]> {
  const moveList: MoveDisplayData[] = [];

  for (const move of moves) {
    const response = await fetch(move.move.url, {
      cache: 'force-cache',
    });
    const data = (await response.json()) as MoveApiData;

    const mapMoveDetailsByGame: MoveGameDetails[] =
      move.version_group_details.map((item) => {
        const getDescriptionByGame =
          data.effect_entries.find(
            (description) => description.language.name === 'en'
          )?.effect || 'Missing description';

        return {
          level: item.level_learned_at,
          description: getDescriptionByGame,
          game: item.version_group.name,
          learnMethod: item.move_learn_method.name,
        };
      });

    moveList.push({
      accuracy: data.accuracy,
      gameDetails: mapMoveDetailsByGame,
      name: data.name,
      power: data.power,
      pp: data.pp,
      type: data.type.name,
      damageClass: data.damage_class.name,
    });
  }

  return moveList;
}
