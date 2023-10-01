import { Instructions } from './Instructions';

describe('Instructions', () => {
  it('should fail if the instructions is empty', () => {
    const result = Instructions.create('');
    expect(result.isSuccess).toBe(false);
  });

  it('should fail the instructions length is less than the minimum length', () => {
    const result = Instructions.create('a'.repeat(Instructions.MIN_LENGTH - 1));
    expect(result.isSuccess).toBe(false);
  });

  it('should fail the instructions length is greater than the maximum length', () => {
    const result = Instructions.create('a'.repeat(Instructions.MAX_LENGTH + 1));
    expect(result.isSuccess).toBe(false);
  });

  it('should succeed if the instructions length is within the valid range', () => {
    const value = 'myValidInstructions';
    const result = Instructions.create(value);
    expect(result.isSuccess).toBe(true);

    const instructions = result.getValue();
    expect(instructions.value).toBe(value);
  });
});
