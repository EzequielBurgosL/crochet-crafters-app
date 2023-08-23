export class Result<T> {
  public isSuccess: boolean;
  public errorMessage: string;
  private _value?: T;

  public constructor(isSuccess: boolean, errorMessage: string = '', value?: T) {
    if (isSuccess && errorMessage) {
      throw new Error(
        'InvalidOperation: A result cannot be successful and contain an error',
      );
    }

    if (!isSuccess && !errorMessage) {
      throw new Error(
        'InvalidOperation: A failing result needs to contain an error message',
      );
    }

    this.isSuccess = isSuccess;
    this.errorMessage = errorMessage;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(
        'Cannot get the value of an error result. Use "errorValue" instead.',
      );
    }

    if (!this._value) {
      throw new Error('Value is not defined. Use "errorValue" instead.');
    }

    return this._value;
  }

  public errorValue(): string {
    return this.errorMessage;
  }

  public static ok<U>(value: U): Result<U> {
    return new Result<U>(true, '', value);
  }

  public static fail<U>(errorMessage: any): Result<U> {
    return new Result<U>(false, errorMessage);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (const result of results) {
      if (!result.isSuccess) {
        return result;
      }
    }

    return Result.ok(true);
  }
}

export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }
}

export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }
}

export const left = <L, A>(l: L): Either<L, A> => new Left(l);

export const right = <L, A>(a: A): Either<L, A> => new Right<L, A>(a);
