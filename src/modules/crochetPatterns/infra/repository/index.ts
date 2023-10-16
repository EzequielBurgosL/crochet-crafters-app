import { CrochetPatternModel } from '../models/sequelize/crochetPattern';
import { SequelizeCrochetPatternRepository } from './SequelizeCrochetPatternRepository';

const crochetPatternRepository = new SequelizeCrochetPatternRepository(CrochetPatternModel);

export { crochetPatternRepository };
