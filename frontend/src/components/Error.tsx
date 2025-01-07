import React from 'react';
import pokeError from '@/assets/poke-error.png';

const Error: React.FC = () => {
  return (
    <div className="w-full h-lvh mt-[8vh] flex flex-col items-center gap-12">
      <p>{'Error :('}</p>
      <img src={pokeError} alt="Error" width={150} />
    </div>
  );
};

export default Error;
