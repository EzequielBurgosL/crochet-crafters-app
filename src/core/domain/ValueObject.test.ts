import { shallowEqual, ValueObject } from './ValueObject'; // Replace 'path-to-your-code' with the actual path to your code

class TestValueObject extends ValueObject<{ name: string; age: number }> {
  constructor(props: { name: string; age: number }) {
    super(props);
  }
}

describe('ValueObject', () => {
  it('should create an instance with the provided props', () => {
    const props = { name: 'John', age: 30 };
    const valueObject = new TestValueObject(props);
    expect(valueObject.props).toEqual(props);
  });

  it('should return true when comparing two equal value objects', () => {
    const props1 = { name: 'John', age: 30 };
    const props2 = { name: 'John', age: 30 };
    const vo1 = new TestValueObject(props1);
    const vo2 = new TestValueObject(props2);

    expect(vo1.equals(vo2)).toBe(true);
  });

  it('should return false when comparing with null or undefined', () => {
    const props = { name: 'John', age: 30 };
    const valueObject = new TestValueObject(props);

    expect(valueObject.equals(undefined)).toBe(false);
  });

  it('should return false when comparing with a different value object', () => {
    const props1 = { name: 'John', age: 30 };
    const props2 = { name: 'Alice', age: 25 };
    const vo1 = new TestValueObject(props1);
    const vo2 = new TestValueObject(props2);

    expect(vo1.equals(vo2)).toBe(false);
  });
});

describe('shallowEqual', () => {
  it('should return true when two objects have shallow equal properties', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };

    expect(shallowEqual(obj1, obj2)).toBe(true);
  });

  it('should return false when two objects have different properties', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'Alice', age: 25 };

    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  it('should return false when one object has extra properties', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30, address: '123 Main St' };

    expect(shallowEqual(obj1, obj2)).toBe(false);
  });
});
