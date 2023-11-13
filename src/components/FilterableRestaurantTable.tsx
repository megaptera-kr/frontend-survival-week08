import { useState } from 'react';
import useFetchRestauratns from '../hooks/useFetchRestaurants';
import extractCategories from '../utils/extractCategories';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestauratns();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
