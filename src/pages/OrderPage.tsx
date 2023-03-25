import { useState } from 'react';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import filterRestaurants from '../utils/filterRestaurants';
import RestaurantsList from '../components/RestaurantsList';

export default function OrderPage() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');

  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategory },
  );
  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        placeholder="식당이름을 입력해주세요."
      />
      <div>
        <Categories
          restaurants={restaurants}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
        <RestaurantsList
          filteredRestaurants={filteredRestaurants}
        />
      </div>
    </div>
  );
}
