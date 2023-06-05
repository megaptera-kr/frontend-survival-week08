import { useLoaderData, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterCategories from '../utils/filterCategories';
import { Restaurant } from '../types/restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import FilterRestaurants from '../components/FilterRestaurants';
import RestaurantsTable from '../components/RestaurantsTable';
import Cart from '../components/Cart';
import useCartStore from '../hooks/useCartStore';
import useCreateReceipt from '../hooks/useCreateReceipt';

export async function loader() {
  const restaurants = useFetchRestaurants();
  return restaurants;
}

export default function Order() {
  const restaurants = useLoaderData() as Restaurant[];
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const [, cartStore] = useCartStore();
  const navigate = useNavigate();

  const handleCancel = () => {
    cartStore.reset();
    navigate('/');
  };

  const handleOrderSubmit = async () => {
    const createReceiptId = await useCreateReceipt(cartStore.cart);
    navigate(`/order/complete?orderId=${createReceiptId}`);
  };

  const categories = filterCategories(restaurants);
  // eslint-disable-next-line max-len
  const filteredRestaurants = filterRestaurants(restaurants, { text: filterText, category: filterCategory });

  return (
    <div>
      <FilterRestaurants
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
      <Cart
        handleCancel={handleCancel}
        handleOrderSubmit={handleOrderSubmit}
      />
    </div>
  );
}
