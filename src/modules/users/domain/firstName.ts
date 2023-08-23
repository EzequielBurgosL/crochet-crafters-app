import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { ValueObject } from '../../../core/domain/ValueObject';

interface Props {
  value: string;
}

export class FirstName extends ValueObject<Props> {
  static readonly MIN_LENGTH = 5;
  static readonly MAX_LENGTH = 50;
  static readonly argName = 'firstName';

  private constructor(props: Props) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(firstName: string): Result<FirstName> {
    const nullGuardResult = Guard.againstNullOrUndefined(
      firstName,
      this.argName,
    );

    if (nullGuardResult.error) {
      return Result.fail(nullGuardResult.error);
    }

    const lengthGuardResult = Guard.inRange(
      firstName.length,
      this.MIN_LENGTH,
      this.MAX_LENGTH,
      this.argName,
    );

    if (lengthGuardResult.error) {
      return Result.fail<FirstName>(lengthGuardResult.error);
    }

    return Result.ok(new FirstName({ value: firstName }));
  }
}
