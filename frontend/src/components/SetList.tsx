import { PokemonSet } from '@/lib/types';
import { usePokemonStore } from '@/stores/pokemonStore';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SetList = ({ setList }: { setList: PokemonSet[] }) => {
  const chosenSetId =
    usePokemonStore((state) => state.chosenSetId) || undefined;

  const handleSetChange = (value: string) => {
    if (value && value !== '') usePokemonStore.setState({ chosenSetId: value });
  };

  return (
    <div>
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        className="px-10 flex flex-wrap justify-center gap-3"
        value={chosenSetId}
        onValueChange={handleSetChange}
      >
        <TooltipProvider>
          {setList.map((set) => (
            <Tooltip key={set.id}>
              <TooltipTrigger asChild>
                <div>
                  <ToggleGroupItem
                    value={set.id}
                    className="text-xs data-[state=on]:bg-red-500 data-[state=on]:text-white"
                  >
                    {set.name}
                  </ToggleGroupItem>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <img src={set.logo_url} alt={set.name} width={200} />
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </ToggleGroup>
    </div>
  );
};

export default SetList;
