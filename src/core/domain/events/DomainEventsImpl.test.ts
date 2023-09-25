import { mockAggregate, mockDomainEvent } from '../__fixtures__';
import { DomainEvents } from './DomainEventsImpl';

describe('DomainEvents', () => {
  afterEach(() => {
    // Clear handlers and marked aggregates after each test
    DomainEvents.clearHandlers();
    DomainEvents.clearMarkedAggregates();
  });

  it('should mark an aggregate for dispatch', () => {
    DomainEvents.markAggregateForDispatch(mockAggregate);

    expect(DomainEvents.markedAggregates).toContain(mockAggregate);
  });

  it('should dispatch events for a marked aggregate', () => {
    DomainEvents.markAggregateForDispatch(mockAggregate);
    mockAggregate.addDomainEvent(mockDomainEvent);

    const mockHandler = jest.fn();
    DomainEvents.register(mockHandler, mockDomainEvent.type);

    DomainEvents.dispatchEventsForAggregate(mockAggregate.id);

    expect(mockHandler).toHaveBeenCalledWith(mockDomainEvent);
    expect(mockAggregate.domainEvents).toHaveLength(0);
    expect(DomainEvents.markedAggregates).not.toContain(mockAggregate);
  });

  it('should not dispatch events for an unmarked aggregate', () => {
    mockAggregate.addDomainEvent(mockDomainEvent);

    const mockHandler = jest.fn();
    DomainEvents.register(mockHandler, mockDomainEvent.type);

    DomainEvents.dispatchEventsForAggregate(mockAggregate.id);

    expect(mockHandler).not.toHaveBeenCalled();
    expect(mockAggregate.domainEvents).toHaveLength(1); // Event still remains
  });

  it('should register and dispatch events to handlers', () => {
    const mockHandler1 = jest.fn();
    const mockHandler2 = jest.fn();

    DomainEvents.register(mockHandler1, mockDomainEvent.type);
    DomainEvents.register(mockHandler2, mockDomainEvent.type);

    DomainEvents.dispatch(mockDomainEvent);

    expect(mockHandler1).toHaveBeenCalledWith(mockDomainEvent);
    expect(mockHandler2).toHaveBeenCalledWith(mockDomainEvent);
  });

  it('should clear handlers', () => {
    const mockHandler = jest.fn();
    DomainEvents.register(mockHandler, mockDomainEvent.type);

    DomainEvents.clearHandlers();
    DomainEvents.dispatch(mockDomainEvent);

    expect(mockHandler).not.toHaveBeenCalled();
  });
});
