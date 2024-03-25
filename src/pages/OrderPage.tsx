import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import useCartStore from '../hooks/useCartStore';
import useSetText from '../hooks/useSetText';
import useSetButton from '../hooks/useSetButton';

import FilterText from '../components/order/FilterText';
import FilterTaps from '../components/order/FilterTaps';
import Restaurants from '../components/restaurant/Restaurants';
import Cart from '../components/cart/Cart';

export default function OrderPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType;

  const [, cartStore] = useCartStore();

  useEffect(() => {
    if (orderType !== '매장주문' && orderType !== '전체포장') {
      navigate('/');
    } else {
      cartStore.setOrderType(orderType);
    }
  }, [orderType, cartStore]);

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
