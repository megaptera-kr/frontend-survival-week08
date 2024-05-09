import { useState } from 'react';
import useFetchRestaurants from '../../../hooks/useFetchRestaurants';
import Category from '../../../types/category';
import filterByQuery from '../../../utils/filterByQuery';
import getUniqueCategory from '../../../utils/getUniqueCategory';
import RestaurantsTable from '../RestaurantsTable';
import SearchBar from '../SearchBar';

function FilterableRestaurantsTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const restaurants = useFetchRestaurants();
  const categories = getUniqueCategory(restaurants);

  const filteredRestaurants = filterByQuery(
    restaurants,
    { text: filterText, category: selectedCategory },
  );
  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantsTable;
