import React from 'react';
import pokeHeading from '@/assets/poke-heading.png';

const Heading: React.FC = () => {
  return (
    <div className="w-full relative flex justify-center">
      <div className="h-20 sm:h-28 absolute w-60 bg-transparent" />
      <img src={pokeHeading} alt="PokemonLab" className="h-20 sm:h-28" />
    </div>
  );
};

export default Heading;
