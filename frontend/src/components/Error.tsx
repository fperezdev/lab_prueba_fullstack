import React from 'react';
import pokeError from '@/assets/poke-error.png';

const Error: React.FC = () => {
  return (
    <div className="w-full h-lvh mt-[12vh] flex flex-col items-center gap-32">
      <p>{'Error :('}</p>
      <img src={pokeError} alt="Error" width={150} />
    </div>
  );
};

export default Error;
