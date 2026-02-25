const POKEMON_30_BASE_URL = 'https://www.serebii.net/pokemon30';
const MAX_DEX_NUMBER = 1025;
const PIKACHU_DEX = 25;

export function getPokemon30ImageUrl(nationalDexId: number): string {
  const id =
    nationalDexId >= 1 && nationalDexId <= MAX_DEX_NUMBER
      ? nationalDexId
      : PIKACHU_DEX;
  return `${POKEMON_30_BASE_URL}/${id.toString().padStart(3, '0')}.png`;
}
