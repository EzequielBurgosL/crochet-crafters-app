import { UniqueEntityID } from 'core/domain/UniqueEntityID';
import { Repository } from '../../../../core/infra/Repository';
import { CrochetPattern } from '../../domain/CrochetPattern';
import { CrochetPatternMap } from '../mappers/crochetPatternMap';

type BaseQuery = {
  where: {
    [key: string]: string;
  };
  includes?: any;
};

// Type SqlConnection = {
//   Client: {
//     findOne: Function,
//     create: Function,
//     update: Function,
//   }
// }

export interface CrochetPatternRepository extends Repository<CrochetPattern> { }

export class SequelizeClientRepository implements CrochetPatternRepository {
  private models: any; // Use sequelize model types

  constructor(models: any) {
    this.models = models;
  }

  private createBaseQuery(): BaseQuery {
    return {
      where: {},
    };
  }

  public async findById(id: UniqueEntityID): Promise<CrochetPattern> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where.id = id.toValue().toString();

    const result = await this.models.CrochetPattern.findOne(baseQuery);

    if (!result) {
      // Use Either
      return null as unknown as CrochetPattern;
    }

    return result;
  }

  public async exists(crochetPattern: CrochetPattern): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where.id = crochetPattern.id.toValue().toString();
    const result = await this.models.Client.findOne(baseQuery);

    return Boolean(result) === true;
  }

  public async save(crochetPattern: CrochetPattern): Promise<void> {
    const CrochetPatternModel = this.models.CrochetPattern;
    const exists = await this.exists(crochetPattern);
    const map = new CrochetPatternMap();
    const rawCrochetPattern = map.toPersistence(crochetPattern);

    try {
      if (exists) {
        const sequelizeCrochetPatternInstance = await CrochetPatternModel.findOne({
          where: { id: crochetPattern.id.toValue() },
        });

        await sequelizeCrochetPatternInstance.update(rawCrochetPattern);
      } else {
        await CrochetPatternModel.create(rawCrochetPattern);
      }
    } catch (err) {
      throw new Error();
    }
  }
}