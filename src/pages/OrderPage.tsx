import { useEffect } from 'react';
import CartContainer from '../components/cart/CartContainer';
import MenuContainer from '../components/restaurants/MenuContainer';
import SearchBar from '../components/restaurants/SearchBar';
import useRestaurantStore from '../hooks/useRestaurantStore';

export default function OrderPage() {
  const [, store] = useRestaurantStore();

  useEffect(() => {
    store.fetchRestaurants();
  }, []);

  return (
    <div>
      <SearchBar />
      <MenuContainer />
      <CartContainer />
    </div>
  );
}
