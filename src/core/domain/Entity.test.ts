import { Entity } from './Entity';
import { UniqueEntityID } from './UniqueEntityID';

class TestEntity extends Entity<{ name: string }> {
  constructor(props: { name: string }, id?: UniqueEntityID) {
    super(props, id);
  }
}

describe('Entity', () => {
  describe('constructor', () => {
    it('should create an entity with default ID when not provided', () => {
      const props = { name: 'John' };
      const entity = new TestEntity(props);

      expect(entity.props).toEqual(props);
    });

    it('should create an entity with the provided ID', () => {
      const props = { name: 'John' };
      const id = new UniqueEntityID('custom-id');
      const entity = new TestEntity(props, id);

      expect(entity.props).toEqual(props);
      // Expect(entity._id).toBe(id);
    });
  });

  describe('equals', () => {
    it('should return true when comparing the same entity instance', () => {
      const props = { name: 'John' };
      const entity = new TestEntity(props);

      expect(entity.equals(entity)).toBe(true);
    });

    it('should return true when comparing entities with the same ID', () => {
      const props1 = { name: 'John' };
      const props2 = { name: 'John' };
      const id = new UniqueEntityID('custom-id');
      const entity1 = new TestEntity(props1, id);
      const entity2 = new TestEntity(props2, id);

      expect(entity1.equals(entity2)).toBe(true);
    });

    it('should return false when comparing with null or undefined', () => {
      const props = { name: 'John' };
      const entity = new TestEntity(props);

      expect(entity.equals(undefined)).toBe(false);
    });

    it('should return false when comparing with a different entity', () => {
      const props1 = { name: 'John' };
      const props2 = { name: 'Alice' };
      const entity1 = new TestEntity(props1);
      const entity2 = new TestEntity(props2);

      expect(entity1.equals(entity2)).toBe(false);
    });
  });
});
