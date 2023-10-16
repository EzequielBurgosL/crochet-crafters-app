
import { UseCase } from '../../../../core/domain/UseCase';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Either, left, Result, right } from '../../../../core/logic/Result';
import { Category, CategoryValue } from '../../domain/Category';
import { CrochetPattern } from '../../domain/CrochetPattern';
import { Instructions } from '../../domain/Instructions';
import { Name } from '../../domain/Name';
import { CrochetPatternRepository } from '../../infra/repository/SequelizeCrochetPatternRepository';
import { CreateCrochetPatternDTO } from './CreateCrochetDTO';
import { CreateCrochetPatternErrors } from './CreateCrochetErrors';

type Response = Either<
  GenericAppError.UnexpectedError |
  CreateCrochetPatternErrors.AccountAlreadyExists |
  Result<any>,
  Result<void>
>

export class CreateCrochetPatternUseCase implements
  UseCase<CreateCrochetPatternDTO, Promise<Response>> {
  private crochetPatternRepo: CrochetPatternRepository;

  constructor(crochetPatternRepo: CrochetPatternRepository) {
    this.crochetPatternRepo = crochetPatternRepo;
  }

  async execute(req: CreateCrochetPatternDTO): Promise<Response> {
    const nameOrError = Name.create(req.name);
    const instructionsOrError = Instructions.create(req.instructions);
    const categoryOrError = Category.create(req.category as CategoryValue);

    const combinedPropsResult = Result.combine([
      nameOrError,
      instructionsOrError,
      categoryOrError,
    ]);

    if (combinedPropsResult.errorValue()) {
      return left(Result.fail<void>(combinedPropsResult.errorMessage));
    }

    const crochetPatternOrError = CrochetPattern.create({
      name: nameOrError.getValue(),
      instructions: instructionsOrError.getValue(),
      category: categoryOrError.getValue(),
    });

    if (crochetPatternOrError.errorValue()) {
      return left(Result.fail<void>(combinedPropsResult.errorMessage));
    }

    const crochetPattern: CrochetPattern = crochetPatternOrError.getValue();

    const patternAlreadyExists = await this.crochetPatternRepo.exists(crochetPattern.id);

    if (patternAlreadyExists) {
      return left(new CreateCrochetPatternErrors.AccountAlreadyExists(crochetPattern.name.value));
    }

    try {
      await this.crochetPatternRepo.save(crochetPattern);
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err));
    }

    return right(Result.ok(crochetPatternOrError)) as Response;
  }
}
