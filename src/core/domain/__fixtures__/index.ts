import { AggregateRoot } from '../AggregateRoot';
import { DomainEvent } from '../events/DomainEvents';
import { DomainEvents } from '../events/DomainEventsImpl';
import { UniqueEntityID } from '../UniqueEntityID';

export class TestAggregateRoot extends AggregateRoot<{ name: string }> {
  constructor(props: { name: string }, id: UniqueEntityID, domainEvents: DomainEvents) {
    super(props, id);
  }
}

export const mockDomainEvent: DomainEvent = {
  type: 'SomeEvent',
  dateTimeOccurred: new Date(),
  getAggregateId: () => new UniqueEntityID(),
};

class MockDomainEvents {
  private aggregatesToDispatch: AggregateRoot<any>[] = [];

  markAggregateForDispatch(aggregate: AggregateRoot<any>): void {
    this.aggregatesToDispatch.push(aggregate);
  }
}

export const domainEvents: MockDomainEvents = new MockDomainEvents();

export const mockAggregate = new TestAggregateRoot(
  { name: 'John' },
  new UniqueEntityID(),
  domainEvents,
);
