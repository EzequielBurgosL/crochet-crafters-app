import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Category, CategoryValue } from './Category';
import { CrochetPattern } from './CrochetPattern';
import { CrochetPatternId } from './CrochetPatternId';
import { Instructions } from './Instructions';
import { Name } from './Name';

describe('CrochetPattern', () => {
  describe('create', () => {
    const crochetPatternId = CrochetPatternId.create();
    const name = Name.create('Sample Pattern').getValue();
    const instructions = Instructions.create('instructions...').getValue();
    const category = Category.create(CategoryValue.AMIGURUMI).getValue();

    it('should create a CrochetPattern instance with valid properties', () => {
      const props = {
        crochetPatternId,
        name,
        instructions,
        category,
      };

      const crochetPattern = CrochetPattern.create(props, new UniqueEntityID());

      expect(crochetPattern.isSuccess).toBe(true);
      expect(crochetPattern.getValue()).toBeInstanceOf(CrochetPattern);
      expect(crochetPattern.getValue().name).toEqual(name);
      expect(crochetPattern.getValue().instructions).toEqual(instructions);
      expect(crochetPattern.getValue().category).toEqual(category);
    });

    it('should fail to create a CrochetPattern instance with missing properties', () => {
      const crochetPattern = CrochetPattern.create(
        {
          crochetPatternId,
          name,
          // @ts-ignore: Missing instructions
          instructions: null,
          category,
        },
        new UniqueEntityID(),
      );

      expect(crochetPattern.isSuccess).toBe(false);
      expect(crochetPattern.errorMessage).toBe(
        'instructions is null or undefined',
      );
    });
  });
});
