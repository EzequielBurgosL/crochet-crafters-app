import { Entity } from 'core/domain/Entity';
import { UniqueEntityID } from 'core/domain/UniqueEntityID';

export type EntityProps = Record<string, any>;

export interface Repository<DomainType extends Entity<EntityProps>> {
  exists(id: UniqueEntityID): Promise<boolean>;
  save(entity: DomainType): Promise<void>;
  findById(id: UniqueEntityID): Promise<DomainType>;
}

