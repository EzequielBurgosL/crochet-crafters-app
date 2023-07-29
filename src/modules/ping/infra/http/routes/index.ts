import { Router } from 'express';

const testRouter = Router();

testRouter.get('/', (req, res) => {
  res.send('pong');
});

export { testRouter };
