import { usePokemonStore } from '@/stores/pokemonStore';
import { useQuery } from 'react-query';
import { getPokemonCardsBySet } from '@/requests/pokemon';
import { PokemonCardBasic } from '@/lib/types';
import Card from './Card';
import pikaLoading from '@/assets/pika-loading.gif';
import CardDetail from './CardDetail';
import { useEffect, useState } from 'react';

const CardList = () => {
  const filterText = usePokemonStore((state) => state.filterText);
  const chosenSetId = usePokemonStore((state) => state.chosenSetId);
  const chosenCardId = usePokemonStore((state) => state.chosenCardId);

  const cardsQuery = useQuery<PokemonCardBasic[]>(
    ['pokemon-cards', chosenSetId],
    () => getPokemonCardsBySet(chosenSetId!!),
    { enabled: chosenSetId !== null, staleTime: 5 * 60 * 1000 },
  );

  const [filteredCards, setFilteredCards] = useState<PokemonCardBasic[]>([]);

  useEffect(() => {
    setFilteredCards([]);
  }, [chosenSetId]);

  useEffect(() => {
    const filterCards = () => {
      const newFilteredCards =
        filterText.length < 2
          ? cardsQuery.data
          : cardsQuery.data?.filter((card) => {
              const search = filterText.toLowerCase();
              return (
                card.name.toLowerCase().includes(search) ||
                card.types?.some((type) =>
                  type.toLowerCase().includes(search),
                ) ||
                card.rarity?.toLowerCase().includes(search)
              );
            });
      if (newFilteredCards) setFilteredCards(newFilteredCards);
    };

    const timeoutId = setTimeout(filterCards, 400);

    return () => clearTimeout(timeoutId);
  }, [cardsQuery.data, filterText]);

  return (
    <>
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
              <img
                src={pikaLoading}
                alt="Loading"
                className="overflow-hidden"
              />
            </div>
          ))
        ) : (
          cardsQuery.isSuccess &&
          filteredCards?.map((card) => <Card key={card.id} card={card} />)
        )}
      </div>
      <CardDetail cardId={chosenCardId} />
    </>
  );
};

export default CardList;
