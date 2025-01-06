import React from 'react';
import { useQuery } from 'react-query';
import { getPokemonSets } from '@/requests/pokemon';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import Heading from '@/components/Heading';
import SetList from '@/components/SetList';
import CardList from '@/components/CardList';
import { PokemonSet } from '@/lib/types';

const Pokedex: React.FC = () => {
  const setQuery = useQuery<PokemonSet[]>('pokemon-sets', getPokemonSets);

  if (setQuery.isLoading) return <Loading />;
  if (setQuery.isError) return <Error />;

  return (
    <div className="py-5">
      <Heading />
      <SetList setList={setQuery.data || []} />
      <CardList />
    </div>
  );
};

export default Pokedex;
