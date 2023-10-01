import { Category, CategoryValue } from './Category';

describe('Category', () => {
  describe('create', () => {
    it('should create a Category instance with a valid category value', () => {
      const validCategory = CategoryValue.AMIGURUMI;

      const categoryResult = Category.create(validCategory);

      expect(categoryResult.isSuccess).toBe(true);
      const category = categoryResult.getValue();
      expect(category).toBeInstanceOf(Category);
      expect(category.value).toEqual(validCategory);
    });

    it('should fail to create a Category instance with a null category value', () => {
      // @ts-ignore: invalid category value
      const nullCategory: CategoryValue = null;

      const categoryResult = Category.create(nullCategory);

      expect(categoryResult.isSuccess).toBe(false);
      expect(categoryResult.errorMessage).toEqual(
        'category is null or undefined',
      );
    });

    it('should fail to create a Category instance with an invalid category value', () => {
      const invalidCategory = 'invalid_category';

      // @ts-ignore: invalid category value
      const categoryResult = Category.create(invalidCategory);

      expect(categoryResult.isSuccess).toBe(false);
      expect(categoryResult.errorMessage).toEqual(
        `invalid category value: ${invalidCategory}`,
      );
    });
  });
});
