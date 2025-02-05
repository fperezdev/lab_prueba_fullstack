import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { PokemonCard } from '@/lib/types';
import { getPokemonCard } from '@/requests/pokemon';
import { usePokemonStore } from '@/stores/pokemonStore';
import { useQuery } from 'react-query';
import { Skeleton } from './ui/skeleton';
import pikaLoading from '@/assets/pika-loading.gif';

const CardDetail = ({ cardId }: { cardId: string | null }) => {
  const clearCard = usePokemonStore((state) => state.clearChosenCardId);

  const cardQuery = useQuery<PokemonCard>(
    ['pokemon-cards', cardId],
    () => getPokemonCard(cardId!!),
    { enabled: cardId !== null, refetchInterval: 5 * 60 * 1000 },
  );

  const handleOpenChange = (open: boolean) => {
    if (!open) clearCard();
  };

  return (
    <Dialog open={cardId !== null} onOpenChange={handleOpenChange}>
      <DialogContent className="px-0 pt-14 max-w-[100vw] sm:max-w-max max-h-[100vh] flex justify-center overflow-y-auto">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogDescription className="hidden"></DialogDescription>
        {cardQuery.isError ? (
          <div>{'Error :('}</div>
        ) : cardQuery.isLoading ? (
          <div className="w-60 h-96 flex justify-center items-center sm:w-96">
            <img src={pikaLoading} alt="Loading" className="h-44" />
          </div>
        ) : (
          <div className="px-7 flex flex-col gap-10 sm:flex-row">
            <div className="h-[60vh] aspect-[0.717] relative sm:h-[85vh]">
              <Skeleton className="h-full aspect-[0.717] absolute" />
              <img
                src={cardQuery.data?.img_url_large}
                alt={cardQuery.data?.name}
                className="h-full"
              />
            </div>
            <div className="max-w-96 py-7 flex flex-col gap-5 sm:gap-10">
              <span className="text-xl">
                #{cardQuery.data?.number} {cardQuery.data?.name}
              </span>
              <div className="flex flex-col sm:flex-row">
                <span className="w-48">Supertipo</span>
                <span className="text-gray-600">
                  {cardQuery.data?.supertype || 'NA'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-48">Tipos</span>
                <div className="flex flex-col">
                  {cardQuery.data?.types?.length === 0 ? (
                    <span className="text-gray-600">NA</span>
                  ) : (
                    cardQuery.data?.types?.map((type) => (
                      <span key={type} className="mr-2 text-gray-600">
                        {type}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-48">Subtipos</span>
                <div className="flex flex-col">
                  {cardQuery.data?.subtypes?.length === 0 ? (
                    <span className="text-gray-600">NA</span>
                  ) : (
                    cardQuery.data?.subtypes?.map((subtype) => (
                      <span key={subtype} className="mr-2 text-gray-600">
                        {subtype}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-48">Rareza</span>
                <span className="text-gray-600">
                  {cardQuery.data?.rarity || 'NA'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-48">Markets</span>
                <div className="flex flex-col">
                  {cardQuery.data?.markets?.length === 0 ? (
                    <span className="text-gray-600">NA</span>
                  ) : (
                    cardQuery.data?.markets?.map((market) => (
                      <a
                        key={market.name}
                        href={market.url}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {market.name}
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CardDetail;
