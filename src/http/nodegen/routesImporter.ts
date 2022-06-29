import config from '@/config';
import express from 'express';
import eventRoutes from './routes/eventRoutes';
import userRoutes from './routes/userRoutes';

export interface RoutesImporter {
  basePath?: string
}

export const baseUrl = '/';

export default function (app: express.Application, options: RoutesImporter = {basePath: baseUrl}) {
  const basePath = (options.basePath || '').replace(/\/+$/, '');

  app.use(basePath + '/event', eventRoutes());

  app.use(basePath + '/user', userRoutes());

  if (config.loadSwaggerUIRoute) {
    app.use(basePath + '/swagger', require('./routes/swaggerRoutes').default());
  }
}
