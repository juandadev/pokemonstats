export const IS_BROWSER = typeof window !== 'undefined';

export const EFFECTS_EMOJIS = ['😶', '🙂', '😁', '😐'];

export const EFFECTS_NAMES = [
  'no effect',
  'normal',
  'super effective',
  'not very effective',
];

export const EFFECTS_COLORS = ['dark', 'light', 'success', 'warning'];

export const TYPES = [
  ['normal', '#88887B'],
  ['fire', '#FF4422'],
  ['water', '#3399FE'],
  ['electric', '#FFCC33'],
  ['grass', '#76CC55'],
  ['ice', '#65CCFF'],
  ['fighting', '#BA5544'],
  ['poison', '#AB579A'],
  ['ground', '#DEBB54'],
  ['flying', '#8799FF'],
  ['psychic', '#FF5599'],
  ['bug', '#A9BB22'],
  ['rock', '#BBAA66'],
  ['ghost', '#6666BA'],
  ['dragon', '#7666EE'],
  ['dark', '#775444'],
  ['steel', '#B7B7C5'],
  ['fairy', '#F1A8F0'],
];

export const EVOLUTION_DETAILS = {
  item: {
    'kings-rock': "King's rock",
    'water-stone': 'Water stone',
    'thunder-stone': 'Thunder stone',
    'fire-stone': 'Fire stone',
  },
  stats: {
    '1': 'ATK > DEF',
    '-1': 'ATK < DEF',
    '0': 'ATK = DEF',
  },
  min_happiness: 'Friendship',
};

export const LETTERS_CHART = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
];

export const WEAKNESS_CHART = [
  [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 1, 1, 3, 1],
  [1, 1, 3, 3, 1, 2, 2, 1, 1, 1, 1, 1, 2, 3, 1, 3, 1, 2, 1],
  [2, 1, 2, 3, 1, 3, 1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 1, 1, 1],
  [3, 1, 1, 2, 3, 3, 1, 1, 1, 0, 2, 1, 1, 1, 1, 3, 1, 1, 1],
  [4, 1, 3, 2, 1, 3, 1, 1, 3, 2, 3, 1, 3, 2, 1, 3, 1, 3, 1],
  [5, 1, 3, 3, 1, 2, 3, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 3, 1],
  [6, 2, 1, 1, 1, 1, 2, 1, 3, 1, 3, 3, 3, 2, 0, 1, 2, 2, 3],
  [7, 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 0, 2],
  [8, 1, 2, 1, 2, 3, 1, 1, 2, 1, 0, 1, 3, 2, 1, 1, 1, 2, 1],
  [9, 1, 1, 1, 3, 2, 1, 2, 1, 1, 1, 1, 2, 3, 1, 1, 1, 3, 1],
  [10, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 0, 3, 1],
  [11, 1, 3, 1, 1, 2, 1, 3, 3, 1, 3, 2, 1, 1, 3, 1, 2, 3, 3],
  [12, 1, 2, 1, 1, 1, 2, 3, 1, 3, 2, 1, 2, 1, 1, 1, 1, 3, 1],
  [13, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1],
  [14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 0],
  [15, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 2, 1, 3, 1, 3],
  [16, 1, 3, 3, 3, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 2],
  [17, 1, 3, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1],
];
