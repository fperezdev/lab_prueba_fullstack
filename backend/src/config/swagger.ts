import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Lab Prueba API',
      version: '1.0.0',
      description: 'Esta es una API para la prueba de Lab Microsystem',
    },
    servers: [{ url: '/api/v1' }],
  },
  apis: ['src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;
