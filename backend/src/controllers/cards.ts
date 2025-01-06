import { Request, Response } from 'express';
import pool from '../config/db';
import { PokemonCard } from '../lib/types';

export const getCardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query<PokemonCard>(
      `SELECT card.*, image_large.url as img_url_large, image_small.url as img_url_small 
       FROM public.card card
       INNER JOIN public.image image_large ON card.id = image_large.card_id AND image_large.type = 'large'
       INNER JOIN public.image image_small ON card.id = image_small.card_id AND image_small.type = 'small'
       WHERE card.id = $1`,
      [id],
    );

    if (result.rowCount === 0)
      return res.status(404).json({ error: 'Card not found' });

    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
