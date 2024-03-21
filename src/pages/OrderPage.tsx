import { useLocation } from 'react-router';

import styled from 'styled-components';

import useSetText from '../hooks/useSetText';
import useSetButton from '../hooks/useSetButton';

import FilterText from '../components/order/FilterText';
import FilterTaps from '../components/order/FilterTaps';
import { WordH2 } from '../components/common/Word';
import Restaurants from '../components/restaurant/Restaurants';
import Cart from '../components/cart/Cart';

const Wrapper = styled.article`
  margin-top: 1.8rem;
`;

const OrderTypeWord = styled(WordH2)`
  font-size: 3.2rem;
  font-family: pretendard-regular;
  background-color: white;
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
    <>
      {/* TODO: Need to Refactor */}
      <Wrapper>
        <FilterText setFilterText={setText} />
        <FilterTaps category={category} setCategory={setCategory} />
        <OrderTypeWord text={`[${orderType}] 입니다!`} />
      </Wrapper>
      <Restaurants restaurantName={text} categoryName={category} />
      <Cart />
    </>
  );
}
