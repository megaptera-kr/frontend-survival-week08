import Restaurant from '../types/restaurant';

export default function getUniqueCategory(restaurants:Restaurant[]) {
  return restaurants.reduce((acc, restaurant) => (
    acc.includes(restaurant.category)
      ? acc
      : [...acc, restaurant.category]), ['전체']);
}
