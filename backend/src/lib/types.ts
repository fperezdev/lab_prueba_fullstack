export type PokemonCard = {
  id: string;
  name: string;
  supertype: string;
  subtypes?: string[];
  types?: string[];
  set_id: string;
  number: string;
  rarity?: string;
};

export type PokemonSet = {
  id: string;
  name: string;
  series: string;
  printed_total?: number;
  total?: number;
  ptcgo_code?: string;
  release_date?: Date;
  updated_at?: Date;
  symbol_url?: string;
  logo_url?: string;
};
