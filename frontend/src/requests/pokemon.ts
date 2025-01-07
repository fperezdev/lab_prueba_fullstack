import { PokemonCard, PokemonSet } from '@/lib/types';
import { basePath } from '@/lib/vars';

export async function getPokemonSets() {
  const result = await fetch(`${basePath}/sets`);
  const sets = (await result.json()) as PokemonSet[];
  return sets.sort((a: PokemonSet, b: PokemonSet) =>
    a.name.localeCompare(b.name),
  );
}

export async function getPokemonCardsBySet(setId: string) {
  const result = await fetch(`${basePath}/sets/${setId}/cards`);
  const cards = (await result.json()) as PokemonCard[];
  return cards.sort(
    (a: PokemonCard, b: PokemonCard) => parseInt(a.number) - parseInt(b.number),
  );
}

export async function getPokemonCard(cardId: string) {
  const result = await fetch(`${basePath}/cards/${cardId}`);
  const card = (await result.json()) as PokemonCard;
  return card;
}
