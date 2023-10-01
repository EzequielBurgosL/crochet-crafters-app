import { UniqueEntityID } from 'core/domain/UniqueEntityID';
import { CrochetPattern } from './CrochetPattern';
import { Name } from './Name';
import { Instructions } from './Instructions';
import { Category } from './Category';
import { CrochetPatternId } from './CrochetPatternId';

describe('CrochetPattern', () => {
  describe('create', () => {
    it('should create a CrochetPattern instance with valid properties', () => {
      const crochetPatternId = CrochetPatternId.create();
      const name = Name.create('Sample Pattern').getValue();
      const instructions = Instructions.create(
        'Sample instructions',
      ).getValue();
      const category: Category = Category.AMIGURUMI;
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
      const crochetPatternId = new CrochetPatternId();
      const name = new Name('Sample Pattern');
      // Missing instructions
      const category: Category = 'amigurumi';

      const crochetPattern = CrochetPattern.create(
        {
          crochetPatternId,
          name,
          instructions: null, // Missing instructions
          category,
        },
        new UniqueEntityID(),
      );

      expect(crochetPattern.isFailure).toBe(true);
      expect(crochetPattern.error).toBeInstanceOf(Array);
      expect(crochetPattern.error).toHaveLength(1);
      expect(crochetPattern.error[0].message).toBe(
        'Argument instructions cannot be null or undefined.',
      );
    });
  });
});
