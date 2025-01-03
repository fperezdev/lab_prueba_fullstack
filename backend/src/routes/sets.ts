import express from 'express';
import { getAllSets, getCardsBySetId } from '../controllers/sets';

const router = express.Router();

router.get('/', getAllSets);
router.get('/:id/cards', getCardsBySetId);

export default router;
