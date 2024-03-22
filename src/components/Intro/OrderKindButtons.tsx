import styled from 'styled-components';

import OrderKindButton from './OrderKindButton';

const OrderKindButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;

export default function OrderKindButtons() {
  return (
    <OrderKindButtonWrapper>
      <OrderKindButton
        src='/images/fastfood.png'
        alt='eat_in'
        text='매장주문'
      />
      <OrderKindButton src='/images/bag.png' alt='take_out' text='전체포장' />
    </OrderKindButtonWrapper>
  );
}
