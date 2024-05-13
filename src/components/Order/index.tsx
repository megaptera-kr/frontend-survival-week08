import Cart from '../Cart';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';

function Order() {
  return (
    <div>
      <FilterableRestaurantsTable />
      <Cart />
    </div>
  );
}

export default Order;
