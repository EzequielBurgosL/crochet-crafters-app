import { CrochetPattern } from 'modules/crochetPatterns/domain/CrochetPattern';
import { UniqueEntityID } from '../../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../../core/infra/Mapper';
import { Name } from 'modules/crochetPatterns/domain/Name';
import { Instructions } from 'modules/crochetPatterns/domain/Instructions';
import { Category, CategoryValue } from 'modules/crochetPatterns/domain/Category';

type RawCrochetPattern = {
  entityId: string;
  name: string;
  instructions: string;
  category: string;
  dateAdded?: Date;
}

export class CrochetPatternMap implements Mapper<CrochetPattern, RawCrochetPattern> {
  toPersistence(crochetPattern: CrochetPattern): RawCrochetPattern {
    return {
      entityId: crochetPattern.id.toString(),
      name: crochetPattern.name.value,
      instructions: crochetPattern.instructions.value,
      category: crochetPattern.category.value
    };
  }

  toDomain(raw: RawCrochetPattern): CrochetPattern {
    const nameOrError = Name.create(raw.name);
    const instructionsOrError = Instructions.create(raw.instructions);
    const categoryOrError = Category.create(raw.category.toUpperCase() as CategoryValue);

    const crochetPatternOrError = CrochetPattern.create(
      {
        name: nameOrError.getValue(),
        instructions: instructionsOrError.getValue(),
        category: categoryOrError.getValue(),
      },
      new UniqueEntityID(raw.entityId),
    );

    if (!crochetPatternOrError.isSuccess) {
      throw new Error(crochetPatternOrError.errorMessage);
    }

    return crochetPatternOrError.getValue();
  }
}