import { getPokemonSets } from '@/requests/pokemon';
import React from 'react';
import { useQuery } from 'react-query';

const Pokedex: React.FC = () => {
  const query = useQuery('pokemon-sets', async () => {
    return await getPokemonSets();
  });
  return (
    <div>
      <h1>Pokedex</h1>
      {query.isLoading && <div>Loading...</div>}
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
