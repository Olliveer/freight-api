import { Router } from 'express';
import { freightRoutes } from '../../../modules/freight/routes/freight.routes';

const routes = Router();

routes.use('/freight', freightRoutes);

export { routes };
