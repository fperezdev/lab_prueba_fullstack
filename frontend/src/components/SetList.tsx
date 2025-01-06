import { PokemonSet } from '@/lib/types';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SetList = ({ setList }: { setList: PokemonSet[] }) => {
  return (
    <div>
      <TooltipProvider>
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          className="px-10 flex flex-wrap justify-center gap-3"
        >
          {setList.map((set) => (
            <Tooltip>
              <TooltipTrigger>
                <ToggleGroupItem value={set.id} className="text-xs">
                  {set.name}
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent>
                <img src={set.logo_url} alt={set.name} width={200} />
              </TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
      </TooltipProvider>
    </div>
  );
};

export default SetList;
