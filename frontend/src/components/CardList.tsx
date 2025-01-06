import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { usePokemonStore } from '@/stores/pokemonStore';
import { useQuery } from 'react-query';
import { getPokemonCardsBySet } from '@/requests/pokemon';
import { PokemonCard } from '@/lib/types';

const CardList = () => {
  const pokemonSetId = usePokemonStore((state) => state.chosenSetId);

  const cardsQuery = useQuery<PokemonCard[]>(
    ['pokemon-cards', pokemonSetId],
    () => getPokemonCardsBySet(pokemonSetId!!),
    { enabled: pokemonSetId !== null },
  );

  if (cardsQuery.isLoading) return <div>Loading...</div>;
  if (cardsQuery.isError) return <div>Error</div>;

  return (
    <div className="py-7">
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        className="px-10 flex flex-wrap justify-center gap-3"
      >
        {cardsQuery.data?.map((card) => (
          <ToggleGroupItem value={card.id} className="text-xs">
            {card.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CardList;
