import CategoryType from '../src/types/CategoryType';
import CategoryModel from '../src/models/CategoryModel';

const data: CategoryType[] = [
  {
    id: 1,
    name: '한식',
  },
  {
    id: 2,
    name: '일식',
  },
  {
    id: 3,
    name: '중식',
  },
];

const categories = data.map((item) => new CategoryModel({ ...item }));

export default categories;
