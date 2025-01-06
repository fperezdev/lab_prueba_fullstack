import React from 'react';
import pokeHeading from '@/assets/poke-heading.png';

const Heading: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <img src={pokeHeading} alt="PokemonLab" width={400} />
    </div>
  );
};

export default Heading;
