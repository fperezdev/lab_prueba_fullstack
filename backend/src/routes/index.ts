import express from 'express';
import cardsRouter from './cards';
import setsRouter from './sets';

const router = express.Router();

router.get('/status', (_req, res) => {
  res.json({ status: 'El servidor se ve OK' });
});

router.use('/cards', cardsRouter);
router.use('/sets', setsRouter);

export default router;
