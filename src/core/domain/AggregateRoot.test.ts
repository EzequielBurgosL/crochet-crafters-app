import { UniqueEntityID } from './UniqueEntityID';
import { domainEvents, mockAggregate, mockDomainEvent, TestAggregateRoot } from './__fixtures__';

describe('AggregateRoot', () => {
  it('should create an instance with the provided value', () => {
    const props = { name: 'John' };
    const id = new UniqueEntityID();
    const aggregate = new TestAggregateRoot(props, id, domainEvents);

    expect(aggregate.props).toEqual(props);
    expect(aggregate.id).toBe(id);
    expect(aggregate.domainEvents).toEqual([]);
  });

  it('should add a domain event when addDomainEvent is called', () => {
    mockAggregate.addDomainEvent(mockDomainEvent);

    expect(mockAggregate.domainEvents).toEqual([mockDomainEvent]);
  });

  it('should clear domain events when clearEvents is called', () => {
    mockAggregate.addDomainEvent(mockDomainEvent);
    expect(mockAggregate.domainEvents).toHaveLength(1);

    mockAggregate.clearEvents();
    expect(mockAggregate.domainEvents).toHaveLength(0);
  });
});

