import FilterableRestaurants from '../components/restaurants/FilterableRestaurants';

import Cart from '../components/cart';

export default function OrderPage() {
  return (
    <article>
      <FilterableRestaurants />
      <Cart />
    </article>
  );
}
