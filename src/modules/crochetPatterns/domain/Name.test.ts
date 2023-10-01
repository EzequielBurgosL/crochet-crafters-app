import { Name } from './Name';

describe('Name', () => {
  it('should fail if the name is empty', () => {
    const result = Name.create('');
    expect(result.isSuccess).toBe(false);
  });

  it('should fail the name length is less than the minimum length', () => {
    const result = Name.create('a'.repeat(Name.MIN_LENGTH - 1));
    expect(result.isSuccess).toBe(false);
  });

  it('should fail the name length is greater than the maximum length', () => {
    const result = Name.create('a'.repeat(Name.MAX_LENGTH + 1));
    expect(result.isSuccess).toBe(false);
  });

  it('should succeed if the name length is within the valid range', () => {
    const value = 'myValidName';
    const result = Name.create(value);
    expect(result.isSuccess).toBe(true);

    const name = result.getValue();
    expect(name.value).toBe(value);
  });
});
