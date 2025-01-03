import { Request, Response } from 'express';
import pool from '../config/db';
import { PokemonCard } from '../lib/types';

export const getCardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query<PokemonCard>(
      'SELECT * FROM public.card WHERE id = $1',
      [id],
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
