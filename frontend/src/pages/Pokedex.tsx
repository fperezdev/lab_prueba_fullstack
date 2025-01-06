import React from 'react';
import { useQuery } from 'react-query';
import { getPokemonSets } from '@/requests/pokemon';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import Heading from '@/components/Heading';
import SetList from '@/components/SetList';
import CardList from '@/components/CardList';
import { PokemonSet } from '@/lib/types';
import { usePokemonStore } from '@/stores/pokemonStore';

const Pokedex: React.FC = () => {
  const setQuery = useQuery<PokemonSet[]>(
    'pokemon-sets',
    async () => {
      const result = await getPokemonSets();
      if (result && result.length > 0)
        usePokemonStore.setState({ chosenSetId: result[0].id });

      return result;
    },
    { refetchInterval: 30 * 60 * 1000 },
  );

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
