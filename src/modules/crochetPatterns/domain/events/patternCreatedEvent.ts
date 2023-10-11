import { DomainEvent } from "../../../../core/domain/events/DomainEvents";
import { CrochetPatternId } from "../CrochetPatternId";
import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID";

type Props = {
  id: UniqueEntityID;
  type: string;
  dateTimeOccurred: Date;
};

export class PatternCreatedEvent implements DomainEvent {
  public id: UniqueEntityID;
  public type: string;
  public dateTimeOccurred: Date;

  constructor(props: Props) {
    this.id = props.id;
    this.type = props.type;
    this.dateTimeOccurred = props.dateTimeOccurred;
  }

  public getAggregateId(): UniqueEntityID {
    return this.id;
  }
}