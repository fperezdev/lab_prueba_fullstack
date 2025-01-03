import { Request, Response } from 'express';
import pool from '../config/db';
import { PokemonCard, PokemonSet } from '../lib/types';

export const getAllSets = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query<PokemonSet>('SELECT * FROM public.set');
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCardsBySetId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query<PokemonCard>(
      'SELECT * FROM public.card WHERE set_id = $1',
      [id],
    );
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
