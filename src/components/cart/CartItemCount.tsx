import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import Img from '../common/Image';
import Span from '../common/Span';

const Wrapper = styled.div`
  flex-basis: 50%;
  background-color: #f4f4f4;
  padding: 2.4rem 1.2rem;
  color: black;
  align-items: center;
  gap: 1.6rem;
  display: flex;
  font-family: pretendard-regular;
`;

const ShoppingCartImg = styled(Img)`
  width: 4.8rem;
  margin-left: 1.8rem;
`;

const Title = styled(Span)`
  font-size: 3.4rem;
`;

const TotalCount = styled(Span)`
  font-size: 2.8rem;
  font-weight: bold;
  padding: 1.2rem 2.6rem;
  background-color: #ff8400;
  border-radius: 3.2rem;
  color: white;
`;

function CartItemCount() {
  const [, cartStore] = useCartStore();

  return (
    <Wrapper>
      <ShoppingCartImg src='/images/shopping-cart.png' alt='shopping_cart' />
      <Title>주문내역</Title>
      <TotalCount>{cartStore.totalItemNum()}개</TotalCount>
    </Wrapper>
  );
}

export default CartItemCount;
