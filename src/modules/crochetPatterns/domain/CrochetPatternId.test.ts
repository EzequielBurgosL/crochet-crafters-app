import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { CrochetPatternId } from './CrochetPatternId';

describe('CrochetPatternId', () => {
  describe('create', () => {
    it('should create a CrochetPatternId instance with a valid UniqueEntityID', () => {
      const id = new UniqueEntityID();
      const crochetPatternId = CrochetPatternId.create(id);
      expect(crochetPatternId).toBeInstanceOf(CrochetPatternId);
      expect(crochetPatternId.id.toValue()).toEqual(id.toValue());
    });

    it('should create a CrochetPatternId instance of UniqueEntityID if no id is provided', () => {
      const crochetPatternId = CrochetPatternId.create();
      expect(crochetPatternId).toBeInstanceOf(CrochetPatternId);
      expect(crochetPatternId.id).not.toBeNull();
    });
  });
});
