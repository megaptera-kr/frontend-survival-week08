import { Restaurant } from '../types/restaurant';

export default function filterCategories(restaurants: Restaurant[] = []) {
  if (!restaurants.length) {
    return ['전체'];
  }
  return restaurants.reduce((curr, restaurant) => {
    const { category } = restaurant;
    return curr.includes(category) ? curr : [...curr, category];
  }, ['전체']);
}
