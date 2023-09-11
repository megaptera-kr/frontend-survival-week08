import { Restaurant } from '../types/restaurants';

export default function extractCategory(restaurants: Restaurant[]) {
  const categories = restaurants.reduce((acc: string[], restaurant) => (
    acc.includes(restaurant.category) ? acc : [...acc, restaurant.category]
  ), []);
  return categories;
}
