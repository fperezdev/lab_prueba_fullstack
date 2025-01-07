import React from 'react';
import pokeHeading from '@/assets/poke-heading.png';

const Heading: React.FC = () => {
  return (
    <div className="w-full relative flex justify-center">
      <div className="absolute w-96 h-28 bg-transparent" />
      <img src={pokeHeading} alt="PokemonLab" className="h-28" />
    </div>
  );
};

export default Heading;
