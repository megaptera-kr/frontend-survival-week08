import CategoryModel from './CategoryModel';

test('CategoryModel', () => {
  const obj = {
    id: 1,
    name: '카테고리',
  };

  const categoryModel = new CategoryModel({ ...obj });

  expect(categoryModel).not.toBeNull();
  expect(categoryModel.id).toBe(obj.id);
  expect(categoryModel.name).toBe(obj.name);
});
