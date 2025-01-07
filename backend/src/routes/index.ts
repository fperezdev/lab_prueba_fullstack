import express from 'express';
import cardsRouter from './cards';
import setsRouter from './sets';

const router = express.Router();

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Verificar el estado del servidor
 *     responses:
 *       200:
 *         description: Estado del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: El servidor se ve OK
 */
router.get('/status', (_req, res) => {
  res.json({ status: 'El servidor se ve OK' });
});

router.use('/cards', cardsRouter);
router.use('/sets', setsRouter);

export default router;

// Swagger schemas
/**
 * @swagger
 * components:
 *   schemas:
 *     PokemonCardBasic:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: card1
 *         name:
 *           type: string
 *           example: Nombre de la Carta
 *         number:
 *           type: string
 *           example: 001
 *         types:
 *           type: array
 *           items:
 *             type: string
 *           example: [Fire]
 *         rarity:
 *           type: string
 *           example: Common
 *         img_url:
 *           type: string
 *           example: http://example.com/image.png
 *     PokemonCard:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: card1
 *         name:
 *           type: string
 *           example: Nombre de la Carta
 *         supertype:
 *           type: string
 *           example: Pokémon
 *         subtypes:
 *           type: array
 *           items:
 *             type: string
 *           example: [Basic]
 *         types:
 *           type: array
 *           items:
 *             type: string
 *           example: [Fire]
 *         set_id:
 *           type: string
 *           example: set1
 *         number:
 *           type: string
 *           example: 001
 *         rarity:
 *           type: string
 *           example: Common
 *         img_url_large:
 *           type: string
 *           example: http://example.com/image_large.png
 *         img_url_small:
 *           type: string
 *           example: http://example.com/image_small.png
 *         markets:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: MarketName
 *               url:
 *                 type: string
 *                 example: http://marketplace.com/card
 *     PokemonSet:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: set1
 *         name:
 *           type: string
 *           example: Set Name
 *         series:
 *           type: string
 *           example: Series Name
 *         printed_total:
 *           type: integer
 *           example: 100
 *         total:
 *           type: integer
 *           example: 110
 *         ptcgo_code:
 *           type: string
 *           example: PTCGOCode
 *         release_date:
 *           type: string
 *           format: date
 *           example: 2023-01-01
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: 2023-01-01T00:00:00Z
 *         symbol_url:
 *           type: string
 *           example: http://example.com/symbol.png
 *         logo_url:
 *           type: string
 *           example: http://example.com/logo.png
 */
