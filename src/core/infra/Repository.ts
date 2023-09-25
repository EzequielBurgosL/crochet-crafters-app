import { AggregateRoot } from 'core/domain/AggregateRoot';

export interface Repository<DomainType extends AggregateRoot<DomainType>> {
  exists(entity: DomainType): Promise<boolean>;
  save(entity: DomainType): Promise<void>;
  findById(entity: DomainType): Promise<DomainType>;
}
