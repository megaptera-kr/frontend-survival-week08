import Cart from '../component/OrderPage/Cart';
import FilterableRestaurantsTable from '../component/OrderPage/FilterableRestaurantsTable';
import SearchBar from '../component/OrderPage/SearchBar';

export default function OrderPage() {
  return (
    <div>
      <SearchBar />
      <FilterableRestaurantsTable />
      <Cart />
    </div>
  );
}
