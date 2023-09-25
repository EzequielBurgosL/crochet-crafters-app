import { Guard, GuardArgumentCollection, IGuardResult } from './Guard'; // Replace 'path-to-your-code' with the actual path to your code

describe('Guard', () => {
  describe('againstNullOrUndefined', () => {
    it('should return success when argument is not null or undefined', () => {
      const result: IGuardResult = Guard.againstNullOrUndefined('value', 'argName');
      expect(result.isSuccess).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should return failure when argument is null or undefined', () => {
      const result: IGuardResult = Guard.againstNullOrUndefined(undefined, 'argName');
      expect(result.isSuccess).toBe(false);
      expect(result.error).toBe('argName is null or undefined');
    });
  });

  describe('againstNullOrUndefinedBulk', () => {
    it('should return success when all arguments are not null or undefined', () => {
      const args: GuardArgumentCollection = [
        { argument: 'value1', argumentName: 'arg1' },
        { argument: 'value2', argumentName: 'arg2' },
      ];
      const result: IGuardResult = Guard.againstNullOrUndefinedBulk(args);
      expect(result.isSuccess).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should return failure when any argument is null or undefined', () => {
      const args: GuardArgumentCollection = [
        { argument: 'value1', argumentName: 'arg1' },
        { argument: undefined, argumentName: 'arg2' },
      ];
      const result: IGuardResult = Guard.againstNullOrUndefinedBulk(args);
      expect(result.isSuccess).toBe(false);
      expect(result.error).toBe('arg2 is null or undefined');
    });
  });

  describe('isOneOf', () => {
    it('should return success when value is one of the valid values', () => {
      const validValues = [1, 2, 3];
      const result: IGuardResult = Guard.isOneOf(2, validValues, 'argName');
      expect(result.isSuccess).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should return failure when value is not one of the valid values', () => {
      const validValues = [1, 2, 3];
      const result: IGuardResult = Guard.isOneOf(4, validValues, 'argName');
      expect(result.isSuccess).toBe(false);
      expect(result.error).toBe('argName isn\'t oneOf the correct types in [1,2,3]. Got "4".');
    });
  });

  describe('inRange', () => {
    it('should return success when number is within the range', () => {
      const result: IGuardResult = Guard.inRange(5, 1, 10, 'argName');
      expect(result.isSuccess).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should return failure when number is outside the range', () => {
      const result: IGuardResult = Guard.inRange(15, 1, 10, 'argName');
      expect(result.isSuccess).toBe(false);
      expect(result.error).toBe('argName is not within range 1 to 10.');
    });
  });

  describe('allInRange', () => {
    it('should return success when all numbers are within the range', () => {
      const numbers = [5, 6, 7];
      const result: IGuardResult = Guard.allInRange(numbers, 1, 10, 'argName');
      expect(result.isSuccess).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should return failure when any number is outside the range', () => {
      const numbers = [5, 15, 7];
      const result: IGuardResult = Guard.allInRange(numbers, 1, 10, 'argName');
      expect(result.isSuccess).toBe(false);
      expect(result.error).toBe('argName is not within the range.');
    });
  });
});
