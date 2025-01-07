import express from 'express';
import { getCardById } from '../controllers/cards';

const router = express.Router();

/**
 * @swagger
 * /cards/{id}:
 *   get:
 *     tags: ["Pokemon"]
 *     summary: Obtener una carta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la carta
 *     responses:
 *       200:
 *         description: Una carta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PokemonCard'
 */
router.get('/:id', getCardById);

export default router;
