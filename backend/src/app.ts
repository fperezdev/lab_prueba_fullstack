import express from 'express';
import cors from 'cors';
import router from './routes';
import { PORT } from './lib/vars';
import setupSwagger from './config/swagger';

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use('/api/v1', router);

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
