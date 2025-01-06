import { QueryClient, QueryClientProvider } from 'react-query';
import Pokedex from './pages/Pokedex';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pokedex />
    </QueryClientProvider>
  );
}

export default App;
