import { Restaurant, RestaurantFilter } from '../types/kiosk';

const filterRestaurantCategory = (
  restaurants: Restaurant[]
  , category: string,
): Restaurant[] => (category !== '전체' ? restaurants.filter((restaurant) => restaurant.category === category) : restaurants);

const filterRestaurantSearch = (
  restaurants: Restaurant[]
  , search: string,
): Restaurant[] => {
  const regexp = new RegExp(`.*${search.trim()}.*`, 'g');

  return search ? restaurants.filter((restaurant) => regexp.test(restaurant.name)) : restaurants;
};

export const filterRestaurants = (
  restaurants: Restaurant[],
  filter: RestaurantFilter,
): Restaurant[] => filterRestaurantCategory(filterRestaurantSearch(
  restaurants,
  filter.search,
), filter.category);
