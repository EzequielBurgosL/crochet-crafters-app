import { Router } from 'express';
import { testRouter } from '../../modules/ping/infra/http/routes';

const v1Router = Router();

v1Router.use('/ping', testRouter);

export { v1Router };
