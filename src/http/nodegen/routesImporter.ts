import config from '@/config';
import express from 'express';
import categoryRoutes from './routes/categoryRoutes';
import eventRoutes from './routes/eventRoutes';
import locationRoutes from './routes/locationRoutes';
import ticketRoutes from './routes/ticketRoutes';
import userRoutes from './routes/userRoutes';

export interface RoutesImporter {
  basePath?: string
}

export const baseUrl = '/';

export default function (app: express.Application, options: RoutesImporter = {basePath: baseUrl}) {
  const basePath = (options.basePath || '').replace(/\/+$/, '');

  app.use(basePath + '/category', categoryRoutes());

  app.use(basePath + '/event', eventRoutes());

  app.use(basePath + '/location', locationRoutes());

  app.use(basePath + '/ticket', ticketRoutes());

  app.use(basePath + '/user', userRoutes());

  if (config.loadSwaggerUIRoute) {
    app.use(basePath + '/swagger', require('./routes/swaggerRoutes').default());
  }
}
