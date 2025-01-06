import { usePokemonStore } from '@/stores/pokemonStore';
import { useQuery } from 'react-query';
import { getPokemonCardsBySet } from '@/requests/pokemon';
import { PokemonCard } from '@/lib/types';
import Card from './Card';
import pikaLoading from '@/assets/pika-loading.gif';

const CardList = () => {
  const pokemonSetId = usePokemonStore((state) => state.chosenSetId);

  const cardsQuery = useQuery<PokemonCard[]>(
    ['pokemon-cards', pokemonSetId],
    () => getPokemonCardsBySet(pokemonSetId!!),
    { enabled: pokemonSetId !== null, refetchInterval: 5 * 60 * 1000 },
  );

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-10">
      {cardsQuery.isError ? (
        <div>Error cargando cartas</div>
      ) : cardsQuery.isLoading ? (
        Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`pika-loading-${index}`}
            className="w-72 h-48 flex flex-col items-center gap-3"
          >
            <span className="text-transparent flex-shrink">Loading</span>
            <img src={pikaLoading} alt="Loading" className="overflow-hidden" />
          </div>
        ))
      ) : (
        cardsQuery.data?.map((card) => <Card key={card.id} card={card} />)
      )}
    </div>
  );
};

export default CardList;
