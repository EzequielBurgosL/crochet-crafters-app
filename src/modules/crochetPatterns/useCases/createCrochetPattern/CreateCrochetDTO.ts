import { CategoryValue } from 'modules/crochetPatterns/domain/Category';

export interface CreateCrochetPatternDTO {
  name: string;
  category: CategoryValue;
  instructions: string;
}
