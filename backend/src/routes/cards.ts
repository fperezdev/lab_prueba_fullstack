import express from 'express';
import { getCardById } from '../controllers/cards';

const router = express.Router();

router.get('/:id', getCardById);

export default router;
