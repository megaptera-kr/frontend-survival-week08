import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';
import Span from '../common/Span';

const Wrapper = styled.div`
  font-family: pretendard-regular;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Span)`
  color: black;
  font-size: 3.4rem;
  margin-left: 5.2rem;
`;

const Price = styled.span`
  color: #ff8400;
  font-size: 3.4rem;
  margin-right: 3.6rem;
`;

function CartTotalPrice() {
  const [, cartStore] = useCartStore();
  return (
    <Wrapper>
      <Title>총 결제 예상금액</Title>
      <Price>{cartStore.formattedTotalPrice()}원</Price>
    </Wrapper>
  );
}

export default CartTotalPrice;
