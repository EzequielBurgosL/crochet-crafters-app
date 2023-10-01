import { ValueObject } from '../../../core/domain/ValueObject';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';

export enum CategoryValue {
  AMIGURUMI = 'amigurumi',
  SHEETS = 'sheets',
  CLOTHES = 'clothes',
}

interface Props {
  value: CategoryValue;
}

export class Category extends ValueObject<Props> {
  static readonly argName = 'category';

  private constructor(props: Props) {
    super(props);
  }

  get value(): CategoryValue {
    return this.props.value;
  }

  public static create(category: CategoryValue): Result<Category> {
    const nullGuardResult = Guard.againstNullOrUndefined(
      category,
      this.argName,
    );

    if (nullGuardResult.error) {
      return Result.fail(nullGuardResult.error);
    }

    if (!Category.isValidCategory(category)) {
      return Result.fail(`invalid category value: ${category}`);
    }

    return Result.ok(new Category({ value: category }));
  }

  private static isValidCategory(value: CategoryValue): boolean {
    const validCategory = [
      CategoryValue.AMIGURUMI,
      CategoryValue.CLOTHES,
      CategoryValue.SHEETS,
    ];

    return validCategory.includes(value);
  }
}
