import { CrochetPatternModel } from '../models/sequelize/crochetPattern';
import { SequelizeClientRepository } from './SequelizeClientRepository';

const clientRepository = new SequelizeClientRepository(CrochetPatternModel);

export { clientRepository };
