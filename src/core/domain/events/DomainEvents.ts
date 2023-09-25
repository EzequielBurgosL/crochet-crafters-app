import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';

export interface DomainEvent {
  type: string;
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityID;
}
