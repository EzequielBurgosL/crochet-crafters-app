import { crochetPatternRepository } from '../../infra/repository';
import { CreateCrochetPatternController } from './CreateCrochetControler';
import { CreateCrochetPatternUseCase } from './CreateCrochetUseCase';

const createCrochetPatternUseCase = new CreateCrochetPatternUseCase(crochetPatternRepository);
const createCrochetPatternController = new CreateCrochetPatternController(
  createCrochetPatternUseCase,
);

export {
  createCrochetPatternUseCase,
  createCrochetPatternController,
};
