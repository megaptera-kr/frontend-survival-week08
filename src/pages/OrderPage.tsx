import { useLocation } from 'react-router';

import styled from 'styled-components';

import useSetText from '../hooks/useSetText';
import useSetButton from '../hooks/useSetButton';

import FilterText from '../components/order/FilterText';
import FilterTaps from '../components/order/FilterTaps';

const Wrapper = styled.article`
  margin-top: 1.8rem;
`;

export default function OrderPage() {
  const { state } = useLocation();
  const orderType = state?.orderType;

  const [text, setText] = useSetText('');
  const [category, setCategory] = useSetButton('전체');

  return (
    <Wrapper>
      <FilterText setFilterText={setText} />
      <FilterTaps category={category} setCategory={setCategory} />
      <h3 style={{ fontSize: '3rem' }}>OrderTypeComment</h3>
      <section>{orderType}</section>
    </Wrapper>
  );
}
