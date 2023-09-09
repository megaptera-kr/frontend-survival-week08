import { Restaurant } from '../types/restaurants';

type FilterConditions = {
  filterText: string;
  currentCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, currentCategory }: FilterConditions,
) {
  const match = (restaurant: Restaurant) => restaurant.category === currentCategory;
  const filteredByCategory = currentCategory === '전체' ? restaurants : restaurants?.filter(match);

  const contains = (restaurant: Restaurant) => (
    restaurant.name.includes(filterText.trim().toLocaleLowerCase())
  );

  return filteredByCategory.filter(contains);
}
