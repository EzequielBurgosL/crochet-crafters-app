import { ValueObject } from '../../../core/domain/ValueObject';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';

interface Props {
  value: string;
}

export class Name extends ValueObject<Props> {
  static readonly MIN_LENGTH = 5;
  static readonly MAX_LENGTH = 50;
  static readonly argName = 'firstName';

  private constructor(props: Props) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string): Result<Name> {
    const nullGuardResult = Guard.againstNullOrUndefined(name, this.argName);

    if (nullGuardResult.error) {
      return Result.fail(nullGuardResult.error);
    }

    const lengthGuardResult = Guard.inRange(
      name.length,
      this.MIN_LENGTH,
      this.MAX_LENGTH,
      this.argName,
    );

    if (lengthGuardResult.error) {
      return Result.fail(lengthGuardResult.error);
    }

    return Result.ok(new Name({ value: name }));
  }
}
