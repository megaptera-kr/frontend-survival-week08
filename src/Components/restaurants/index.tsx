import { useState } from 'react';

import MenuController from './MenuController';

import useFetchRestaurant from '../../hooks/useFetchRestaurant';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const restaurants = useFetchRestaurant();
  const categories = restaurants?.reduce(
    (acc: string[], restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category]),
    [],
  );
  const filteredCategories = category === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === category);

  const filteredRestaurant = !query
    ? filteredCategories
    : filteredCategories.filter((restaurant) => restaurant.name.includes(query.trim()));

  return (
    <div>
      <MenuController
        query={query}
        setQuery={setQuery}
        categories={categories}
        selectedCategory={category}
        setCategory={setCategory}
      />
      <RestaurantTable restaurants={filteredRestaurant} />
    </div>
  );
}
