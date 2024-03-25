import { useState } from 'react';

import Restaurants from './Restaurants';
import SearchBar from './SearchBar';

import useFetchRestaurant from '../../hooks/useFetchRestaurant';

import extractCategories from '../../utils/extractCategories';
import filterRestaurants from '../../utils/filterRestaurants';

export default function FilterableRestaurants() {
  const restaurants = useFetchRestaurant();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });
  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <Restaurants restaurants={filteredRestaurants} />
    </>
  );
}
