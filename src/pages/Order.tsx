import { useState } from 'react';
import Cart from '../components/order/Cart';
import RestaurantsList from '../components/order/RestaurantsList';
import SearchBar from '../components/order/SearchBar';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Food from '../types/FoodType';
import filterRestaurants from '../components/utils/filterRestaurants';

function Order() {
  const restaurants = useFetchRestaurants();
  const [categoryKeyword, setCategoryKeyWord] = useState('전체');
  const [nameKeyword, setNameKeyWord] = useState('');
  const [selectedMenus, setSelectedMenus] = useState<Food[]>([]);
  const filteredRestaurants = filterRestaurants(categoryKeyword, nameKeyword, restaurants);
  return (
    <main>
      <SearchBar
        setCategoryKeyWord={setCategoryKeyWord}
        categoryKeyword={categoryKeyword}
        setNameKeyWord={setNameKeyWord}
      />
      <RestaurantsList
        restaurants={filteredRestaurants}
        setSelectedMenus={setSelectedMenus}
      />
      <Cart
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
      />
    </main>
  );
}

export default Order;
