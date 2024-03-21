import { useLocation } from 'react-router';

import styled from 'styled-components';

import useSetText from '../hooks/useSetText';
import useSetButton from '../hooks/useSetButton';

import FilterText from '../components/order/FilterText';
import FilterTaps from '../components/order/FilterTaps';
import { WordH2 } from '../components/common/Word';
import Restaurants from '../components/restaurant/Restaurants';
import Cart from '../components/cart/Cart';

const OrderTypeWord = styled(WordH2)`
  font-size: 3.2rem;
  font-family: pretendard-regular;
  /* background-color: white; */
  color: black;
  text-align: start;
  padding-top: 3.2rem;
  padding-left: 3.2rem;
  font-weight: bold;
`;

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
