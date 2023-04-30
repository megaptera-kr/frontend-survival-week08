import React from 'react';
import {
  Cart, CategoryBar, RestaurantList, SearchBar,
} from '../components';

function OrderPage() {
  return (
    <div>
      <SearchBar />
      <CategoryBar />
      <RestaurantList />
      <Cart />
    </div>

  );
}

export default OrderPage;
