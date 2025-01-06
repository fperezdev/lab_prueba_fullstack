import { PokemonSet } from '@/lib/types';
import { basePath } from '@/lib/vars';

export async function getPokemonSets() {
  const result = await fetch(`${basePath}/sets`);
  const sets = await result.json();
  return sets.sort((a: PokemonSet, b: PokemonSet) =>
    a.name.localeCompare(b.name),
  );
}
