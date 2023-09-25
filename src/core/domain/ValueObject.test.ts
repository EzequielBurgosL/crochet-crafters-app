import { shallowEqual, ValueObject, ValueObjectProps } from './ValueObject';

class TestValueObject extends ValueObject<ValueObjectProps> {
  constructor(props: ValueObjectProps) {
    super(props);
  }
}

describe('ValueObject', () => {
  describe('equals', () => {
    it('should return true when two value objects have equal props', () => {
      const props1 = { id: 1, name: 'John' };
      const props2 = { id: 1, name: 'John' };
      const vo1 = new TestValueObject(props1);
      const vo2 = new TestValueObject(props2);

      expect(vo1.equals(vo2)).toBe(true);
    });

    it('should return false when two value objects have different props', () => {
      const props1 = { id: 1, name: 'John' };
      const props2 = { id: 2, name: 'Alice' };
      const vo1 = new TestValueObject(props1);
      const vo2 = new TestValueObject(props2);

      expect(vo1.equals(vo2)).toBe(false);
    });

    it('should return false when comparing with null or undefined', () => {
      const props1 = { id: 1, name: 'John' };
      const vo1 = new TestValueObject(props1);

      expect(vo1.equals(undefined)).toBe(false);
    });
  });
});

describe('shallowEqual', () => {
  it('should return true when two objects have shallow equal properties', () => {
    const obj1 = { id: 1, name: 'John' };
    const obj2 = { id: 1, name: 'John' };

    expect(shallowEqual(obj1, obj2)).toBe(true);
  });

  it('should return false when two objects have different properties', () => {
    const obj1 = { id: 1, name: 'John' };
    const obj2 = { id: 2, name: 'Alice' };

    expect(shallowEqual(obj1, obj2)).toBe(false);
  });

  it('should return false when one object has extra properties', () => {
    const obj1 = { id: 1, name: 'John' };
    const obj2 = { id: 1, name: 'John', age: 30 };

    expect(shallowEqual(obj1, obj2)).toBe(false);
  });
});
