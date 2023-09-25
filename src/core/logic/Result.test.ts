import { left, Result, right } from './Result';

const errorMessage = 'Error message';

describe('Result', () => {
  it('should create a successful result with a value', () => {
    const result = Result.ok(42);
    expect(result.isSuccess).toBe(true);
    expect(result.errorValue()).toBe('');
    expect(result.getValue()).toBe(42);
  });

  it('should create a failed result with an error message', () => {
    const result = Result.fail(errorMessage);
    expect(result.isSuccess).toBe(false);
    expect(result.errorValue()).toBe(errorMessage);
    expect(() => result.getValue()).toThrowError('Cannot get the value');
  });

  it('should throw an error when creating an invalid result', () => {
    expect(() => new Result(true, errorMessage)).toThrowError(
      'InvalidOperation: A result cannot be successful and contain an error',
    );
    expect(() => new Result(false)).toThrowError(
      'InvalidOperation: A failing result needs to contain an error message',
    );
  });

  it('should combine results and return the first failed result', () => {
    const result1 = Result.ok(42);
    const result2 = Result.fail(errorMessage);
    const result3 = Result.fail('Another error');

    const combinedResult = Result.combine([result1, result2, result3]);
    expect(combinedResult.isSuccess).toBe(false);
    expect(combinedResult.errorValue()).toBe(errorMessage);
  });
});

describe('Either', () => {
  it('should create a Left instance', () => {
    const leftInstance = left<string, number>(errorMessage);
    expect(leftInstance.isLeft()).toBe(true);
    expect(leftInstance.isRight()).toBe(false);
    expect(leftInstance.value).toBe(errorMessage);
  });

  it('should create a Right instance', () => {
    const rightInstance = right<string, number>(42);
    expect(rightInstance.isLeft()).toBe(false);
    expect(rightInstance.isRight()).toBe(true);
    expect(rightInstance.value).toBe(42);
  });
});
