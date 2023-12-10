import { useState } from 'react';
import TextField from '../components/order/TextField';
import useFetchRestaurants from '../hooks/useGetRestaurants';
import Category from '../components/order/Category';
import FilteredTable from '../components/order/FilteredTable';

import filteredRestaurant from '../utils/filteredRestaurants';
import Cart from '../components/cart/Cart';
import type Restaurant from '../types/Restaurant';

export default function Order() {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const data = useFetchRestaurants();
  const categoryList = data.reduce((acc: string[], cur: Restaurant) => (
    acc?.includes(cur.category) ? acc : [...acc, cur.category]
  ), ['전체']);
  const filterRestaurants = filteredRestaurant(data, { selectedCategory, filterText });
  return (
    <div>
      <TextField label="검색" placeholder="식당 이름을 입력해주세요" filterText={filterText} setFilterText={setFilterText} />
      <Category
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FilteredTable data={filterRestaurants} />
      <Cart />
    </div>
  );
}
