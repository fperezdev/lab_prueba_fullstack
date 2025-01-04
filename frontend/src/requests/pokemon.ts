import { basePath } from '@/lib/vars';

export async function getPokemonSets() {
  const result = await fetch(`${basePath}/sets`);
  return await result.json();
}
