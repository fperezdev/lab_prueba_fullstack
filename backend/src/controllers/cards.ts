import { Request, Response } from 'express';
import pool from '../config/db';
import { PokemonCard } from '../lib/types';

export const getCardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT
          card.*,
          image_large.url img_url_large,
          image_small.url img_url_small,
          ARRAY_AGG(DISTINCT (market.market || ';url:' || market.url)) markets
       FROM public.card card
       INNER JOIN public.image image_large
          ON card.id = image_large.card_id AND image_large.type = 'large'
       INNER JOIN public.image image_small
          ON card.id = image_small.card_id AND image_small.type = 'small'
       INNER JOIN public.market market
          ON card.id = market.card_id
       WHERE card.id = $1
       GROUP BY card.id, image_large.id, image_small.id
       ORDER BY card.id, image_large.id DESC, image_small.id DESC`,
      [id],
    );

    if (result.rowCount === 0)
      return res.status(404).json({ error: 'Card not found' });

    const rawCard = result.rows[0];
    const card: PokemonCard = {
      ...rawCard,
      markets: rawCard.markets?.map((rawMarket: string) => {
        const [name, url] = rawMarket.split(';url:');
        return { name, url };
      }),
    };

    return res.json(card);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
