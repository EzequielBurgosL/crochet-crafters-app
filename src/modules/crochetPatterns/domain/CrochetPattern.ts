import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { Category } from './Category';
import { Instructions } from './Instructions';
import { Name } from './Name';
import { PatternCreatedEvent } from './events/patternCreatedEvent';

interface CrochetPatternProps {
  name: Name;
  instructions: Instructions;
  category: Category;
  dateAdded?: Date;
}

export class CrochetPattern extends AggregateRoot<CrochetPatternProps> {
  private constructor(props: CrochetPatternProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  get name(): Name {
    return this.props.name;
  }

  get instructions(): Instructions {
    return this.props.instructions;
  }

  get category(): Category {
    return this.props.category;
  }

  public static create(
    props: CrochetPatternProps,
    id?: UniqueEntityID,
  ): Result<CrochetPattern> {
    const propsResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'name', argument: props.name },
      { argumentName: 'instructions', argument: props.instructions },
      { argumentName: 'category', argument: props.category },
    ]);

    if (propsResult.isSuccess) {
      const dateAdded = props.dateAdded ? props.dateAdded : new Date();
      const crochetPattern = new CrochetPattern({ ...props, dateAdded }, id);
      const isNewlyCreated = !!id === false;

      if (isNewlyCreated) {
        crochetPattern.addDomainEvent(new PatternCreatedEvent({
          id: crochetPattern.id,
          dateTimeOccurred: dateAdded,
          type: 'pattern-created'
        }));
      }

      return Result.ok<CrochetPattern>(new CrochetPattern(props, id));
    }

    return Result.fail<CrochetPattern>(propsResult.error);
  }
}
