import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { getPokemonSets } from '@/requests/pokemon';
import React from 'react';
import { useQuery } from 'react-query';
import Heading from '@/components/Heading';
import SetList from '@/components/SetList';

const Pokedex: React.FC = () => {
  const query = useQuery('pokemon-sets', async () => {
    return await getPokemonSets();
  });

  if (query.isLoading) return <Loading />;
  if (query.isError) return <Error />;

  return (
    <div className="py-5">
      <Heading />
      <SetList setList={query.data} />
    </div>
  );
};

export default Pokedex;
