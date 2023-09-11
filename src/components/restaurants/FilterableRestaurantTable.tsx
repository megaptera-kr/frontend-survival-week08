import { useState } from 'react';

import useFetchRestaurants from '../../hooks/useFetchRestaurants';

import extractCategory from '../../utils/extractCategory';
import filterRestaurants from '../../utils/filterRestaurants';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [currentCategory, setCurrentCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();

  const categories = extractCategory(restaurants);
  const filterdRestaurants = filterRestaurants(restaurants, { filterText, currentCategory });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <RestaurantTable restaurants={filterdRestaurants} />
    </div>
  );
}
