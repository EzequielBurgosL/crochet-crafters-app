import express from 'express';
import { crochetPatternRouter } from '../../modules/crochetPatterns/infra/http/routes';

const v1Router = express.Router();

v1Router.use('/crochet-pattern', crochetPatternRouter);

// All routes go here

export { v1Router };
