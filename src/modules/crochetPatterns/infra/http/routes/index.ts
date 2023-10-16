
import express from 'express';
import { createCrochetPatternController } from '../../../useCases/createCrochetPattern';

const crochetPatternRouter = express.Router();

crochetPatternRouter.post('/',
  (req, res) => createCrochetPatternController.execute(req, res),
);

export { crochetPatternRouter };
