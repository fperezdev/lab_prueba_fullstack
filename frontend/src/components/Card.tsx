import { PokemonCardBasic } from '@/lib/types';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { usePokemonStore } from '@/stores/pokemonStore';

const Card = ({ card }: { card: PokemonCardBasic }) => {
  const setChosenCardId = usePokemonStore((state) => state.setChosenCardId);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-72 p-2 flex flex-col gap-3 items-center">
      <p
        className={`w-full text-center overflow-hidden whitespace-nowrap text-ellipsis ${hovered ? 'text-blue-400' : 'text-gray-500'}`}
      >
        #{card.number} {card.name}
      </p>
      {!imgLoaded && <Skeleton className="h-36 aspect-[0.717] rounded-sm" />}
      <img
        src={card.img_url}
        alt={card.name}
        onLoad={() => setImgLoaded(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: imgLoaded ? 'block' : 'none' }}
        className="h-36 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() => setChosenCardId(card.id)}
      />
    </div>
  );
};

export default Card;
