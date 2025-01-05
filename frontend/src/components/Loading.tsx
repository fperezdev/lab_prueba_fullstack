import React from 'react';
import pokeLoading from '@/assets/poke-loading.gif';

const Loading: React.FC = () => {
  return (
    <div className="w-full h-lvh mt-[12vh] flex flex-col items-center gap-10">
      <p>Loading...</p>
      <img src={pokeLoading} alt="Loading" width={400} />
    </div>
  );
};

export default Loading;
