import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { Category } from './Category';
import { CrochetPatternId } from './CrochetPatternId';
import { Instructions } from './Instructions';
import { Name } from './Name';

interface CrochetPatternProps {
  crochetPatternId: CrochetPatternId;
  name: Name;
  instructions: Instructions;
  category: Category;
}

export class CrochetPattern extends Entity<CrochetPatternProps> {
  private constructor(props: CrochetPatternProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get crochetPatternId(): CrochetPatternId {
    return CrochetPatternId.create(this._id);
  }

  get name(): Name {
    return this.props.name;
  }

  get instructions(): Instructions {
    return this.props.instructions;
  }

  get category(): Category {
    return this.props.category;
  }

  public static create(
    props: CrochetPatternProps,
    id?: UniqueEntityID,
  ): Result<CrochetPattern> {
    const propsResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'name', argument: props.name },
      { argumentName: 'instructions', argument: props.instructions },
      { argumentName: 'category', argument: props.category },
    ]);

    if (propsResult.isSuccess) {
      return Result.ok<CrochetPattern>(new CrochetPattern(props, id));
    }

    return Result.fail<CrochetPattern>(propsResult.error);
  }
}
