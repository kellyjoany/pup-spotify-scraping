import { Router } from 'express';

import LogController from './app/controllers/LogController';

const routes = new Router();

routes.post('/log', LogController.store);
routes.get('/log', LogController.list);

export default routes;
