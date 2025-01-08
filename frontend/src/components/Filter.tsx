import React from 'react';
import { Input } from './ui/input';
import { usePokemonStore } from '@/stores/pokemonStore';

const Filter: React.FC = () => {
  const setFilterText = usePokemonStore((state) => state.setFilterText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="mt-7 px-0 flex justify-center sm:px-10">
      <Input
        type="text"
        placeholder="Buscar por nombre, tipo o rareza"
        className="w-80 !text-xs overflow-hidden text-ellipsis sm:w-[30rem]"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
