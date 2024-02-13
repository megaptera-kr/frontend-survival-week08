import Cart from '../Components/cart/Cart';
import FilterableRestaurantTable from '../Components/restaurants';

export default function OrderPage() {
  return (
    <div>
      <FilterableRestaurantTable />
      <Cart />
    </div>
  );
}
