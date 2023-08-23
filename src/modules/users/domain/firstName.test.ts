import { FirstName } from './firstName';

describe('FirstName', () => {
  it('should fail if the firstName is empty', () => {
    const result = FirstName.create('');
    expect(result.isSuccess).toBe(false);
  });

  it('should fail the firstName length is less than 25', () => {
    const result = FirstName.create('a'.repeat(FirstName.MIN_LENGTH - 1));
    expect(result.isSuccess).toBe(false);
  });

  it('should fail the firstName length is greater than 250', () => {
    const result = FirstName.create('a'.repeat(FirstName.MAX_LENGTH + 1));
    expect(result.isSuccess).toBe(false);
  });

  it('should succeed if the firstName length is within the valid range', () => {
    const value = 'myValidFirstName';
    const result = FirstName.create(value);
    expect(result.isSuccess).toBe(true);

    const firstName = result.getValue();
    expect(firstName.value).toBe(value);
  });
});
