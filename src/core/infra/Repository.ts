import { Entity } from 'core/domain/Entity';

export type EntityProps = Record<string, any>;

export interface Repository<DomainType extends Entity<EntityProps>> {
  exists(entity: DomainType): Promise<boolean>;
  save(entity: DomainType): Promise<void>;
  findById(entity: DomainType): Promise<DomainType>;
}

