import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { getPokemonSets } from '@/requests/pokemon';
import React from 'react';
import { useQuery } from 'react-query';

const Pokedex: React.FC = () => {
  const query = useQuery('pokemon-sets', async () => {
    return await getPokemonSets();
  });

  if (query.isLoading) return <Loading />;
  if (query.isError) return <Error />;

  return (
    <div>
      <h1>Pokedex</h1>

      {query.isError && <div>Error</div>}
      {query.isSuccess && (
        <ul>
          {query.data?.map((set: any) => <li key={set.id}>{set.name}</li>)}
        </ul>
      )}
    </div>
  );
};

export default Pokedex;
