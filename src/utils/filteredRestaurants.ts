import type Restaurant from '../types/Restaurant';

type FilteredRestaurantType = {
  selectedCategory: string;
  filterText: string;
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filteredRestaurant(
  data: Restaurant[],
  { selectedCategory, filterText }: FilteredRestaurantType,
) {
  const match = (restaurant: Restaurant) => (restaurant.category === selectedCategory);
  const filteredRestaurants = selectedCategory === '전체' ? data : data.filter(match);
  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
