import express from 'express';
import { getAllSets, getCardsBySetId } from '../controllers/sets';

const router = express.Router();

/**
 * @swagger
 * /sets:
 *   get:
 *     tags: ["Pokemon"]
 *     summary: Obtener una lista de todos los sets
 *     responses:
 *       200:
 *         description: Una lista de sets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PokemonSet'
 */
router.get('/', getAllSets);

/**
 * @swagger
 * /sets/{id}/cards:
 *   get:
 *     tags: ["Pokemon"]
 *     summary: Obtener una lista de cartas por ID del set
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID del set
 *     responses:
 *       200:
 *         description: Una lista de cartas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PokemonCardBasic'
 */
router.get('/:id/cards', getCardsBySetId);

export default router;
