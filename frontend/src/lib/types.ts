export type PokemonCard = {
  id: string;
  name: string;
  supertype: string;
  subtypes?: string[];
  types?: string[];
  set_id: string;
  number: string;
  rarity?: string;
  img_url_large?: string;
  img_url_small?: string;
  markets?: { name: string; url: string }[];
};

export type PokemonCardBasic = {
  id: string;
  name: string;
  number: string;
  img_url?: string;
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
