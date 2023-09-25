import { Identifier } from './Identifier'; // Replace 'path-to-your-code' with the actual path to your code

class TestIdentifier extends Identifier<string> {
  constructor(value: string) {
    super(value);
  }
}

class AnotherTestIdentifier extends Identifier<string> {
  constructor(value: string) {
    super(value);
  }
}

describe('Identifier', () => {
  it('should create an instance with the provided value', () => {
    const idValue = 'example-id';
    const id = new TestIdentifier(idValue);
    expect(id.toValue()).toBe(idValue);
  });

  it('should return true when comparing two equal identifiers', () => {
    const idValue = 'example-id';
    const id1 = new TestIdentifier(idValue);
    const id2 = new TestIdentifier(idValue);
    expect(id1.equals(id2)).toBe(true);
  });

  it('should return false when comparing with null or undefined', () => {
    const idValue = 'example-id';
    const id = new TestIdentifier(idValue);

    expect(id.equals(undefined)).toBe(false);
  });

  it('should return false when comparing with a different type of identifier', () => {
    const idValue = 'example-id';
    const id1 = new TestIdentifier(idValue);
    const id2 = new AnotherTestIdentifier(idValue);
    expect(id1.equals(id2)).toBe(false);
  });

  it('should return false when comparing two different identifiers', () => {
    const id1 = new TestIdentifier('id-1');
    const id2 = new TestIdentifier('id-2');
    expect(id1.equals(id2)).toBe(false);
  });

  it('should return the string representation of the identifier', () => {
    const idValue = 'example-id';
    const id = new TestIdentifier(idValue);
    expect(id.toString()).toBe(idValue);
  });
});

