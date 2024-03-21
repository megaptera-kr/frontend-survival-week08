import { useLocation } from 'react-router';

import styled from 'styled-components';

import useSetText from '../hooks/useSetText';
import useSetButton from '../hooks/useSetButton';

import FilterText from '../components/order/FilterText';
import FilterTaps from '../components/order/FilterTaps';
import { WordH2 } from '../components/common/Word';
import FilterableRestaurants from '../components/restaurant/FilterableRestaurants';

const Wrapper = styled.article`
  margin-top: 1.8rem;
  padding: 25px 25px;
`;

const OrderTypeWord = styled(WordH2)`
  font-size: 3.2rem;
  font-family: pretendard-regular;
  text-align: start;
  margin-top: 3.2rem;
`;

export default function OrderPage() {
  const { state } = useLocation();
  const orderType = state?.orderType;

  const [text, setText] = useSetText('');
  const [category, setCategory] = useSetButton('전체');

  return (
    <>
      <Wrapper>
        <FilterText setFilterText={setText} />
        <FilterTaps category={category} setCategory={setCategory} />
        <OrderTypeWord text={`[${orderType}] 입니다!`} />
      </Wrapper>
      <FilterableRestaurants />
    </>
  );
}
