import { useLocation } from 'react-router';

import useSetText from '../hooks/useSetText';
import useSetButton from '../hooks/useSetButton';

import FilterText from '../components/order/FilterText';
import FilterTaps from '../components/order/FilterTaps';
import Restaurants from '../components/restaurant/Restaurants';
import Cart from '../components/cart/Cart';

export default function OrderPage() {
  const { state } = useLocation();
  const orderType = state?.orderType;

  const [text, setText] = useSetText('');
  const [category, setCategory] = useSetButton('전체');

  return (
    <article>
      <FilterText setFilterText={setText} />
      <FilterTaps category={category} setCategory={setCategory} />
      <Restaurants restaurantName={text} categoryName={category} />
      <Cart orderType={orderType} />
    </article>
  );
}
