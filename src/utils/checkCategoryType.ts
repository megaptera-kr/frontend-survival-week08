import Categories from '../types/Categories';

export default function checkCategoryType(value: string): value is Categories {
  return ['전체', '중식', '한식', '일식'].includes(value);
}
