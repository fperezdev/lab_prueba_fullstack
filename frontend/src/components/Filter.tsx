import React from 'react';
import { Input } from './ui/input';
import { usePokemonStore } from '@/stores/pokemonStore';

const Filter: React.FC = () => {
  const setFilterText = usePokemonStore((state) => state.setFilterText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="mt-7 px-10 flex justify-center">
      <Input
        type="text"
        placeholder="Buscar por nombre, tipo o rareza"
        className="w-[30rem] !text-xs"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
