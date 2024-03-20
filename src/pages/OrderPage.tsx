import { useLocation } from 'react-router';

import styled from 'styled-components';

import FilterText from '../components/order/FilterText';

const Wrapper = styled.article`
  margin-top: 1.8rem;
`;

export default function OrderPage() {
  const { state } = useLocation();
  const orderType = state?.orderType;

  return (
    <Wrapper>
      <FilterText />
      <section style={{ fontSize: '3rem' }}>FilterButtons</section>
      <h3 style={{ fontSize: '3rem' }}>OrderTypeComment</h3>
      <section>{orderType}</section>
    </Wrapper>
  );
}
