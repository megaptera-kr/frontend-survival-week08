import CategoryType from '../types/CategoryType';

class CategoryModel {
  readonly id: number;

  readonly name: string;

  constructor({ id, name }: CategoryType) {
    this.id = id;
    this.name = name;
  }
}

export default CategoryModel;
