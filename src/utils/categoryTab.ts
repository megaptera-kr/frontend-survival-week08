import type { Category } from '../types/kiosk';

const isCategory = (str: string): str is Category => {
  const categories = ['전체', '중식', '한식', '일식'];

  return categories.includes(str);
};

export const parseCategory = (category: string): Category => (isCategory(category) ? category : '전체');
