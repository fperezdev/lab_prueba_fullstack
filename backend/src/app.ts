import express from 'express';
import setsRouter from './routes/sets';
import cardsRouter from './routes/cards';
import { PORT } from './lib/vars';

const app = express();

app.use('/sets', setsRouter);
app.use('/cards', cardsRouter);

app.get('/status', (_req, res) => {
  res.json({ status: 'El servidor se ve OK' });
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
