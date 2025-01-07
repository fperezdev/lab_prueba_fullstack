import { Request, Response } from 'express';
import pool from '../config/db';
import { PokemonCardBasic, PokemonSet } from '../lib/types';

export const getAllSets = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query<PokemonSet>('SELECT * FROM public.set');
    return res.json(result.rows);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

export const getCardsBySetId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query<PokemonCardBasic>(
      `SELECT DISTINCT ON (card.id) card.*, image.url img_url
       FROM public.card card
       INNER JOIN public.image image ON card.id = image.card_id AND image.type = 'small'
       WHERE card.set_id = $1
       ORDER BY card.id DESC`,
      [id],
    );
    const cards = result.rows as PokemonCardBasic[];
    return res.json(cards);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
