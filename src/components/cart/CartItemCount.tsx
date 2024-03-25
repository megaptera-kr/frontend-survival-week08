import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import Img from '../common/Image';
import Text from '../common/Text';

const Wrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const ShoppingCartImg = styled(Img)`
  width: 48px;
  margin-bottom: px;
  margin-left: 1.8rem;
`;

const Title = styled(Text)`
  font-size: 2.8rem;
  font-weight: bold;
`;

const TotalCount = styled(Text)`
  font-size: 2.8rem;
  font-weight: bold;
  padding: 1rem 2.8rem;
  background-color: ${(props) => props.theme.colors.bodyHighlight};
  color: ${(props) => props.theme.colors.headingPrimary};
  border-radius: 3.2rem;
`;

const OrderType = styled(Text)`
  font-size: 2.8rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.bodyHighlight};
  color: ${(props) => props.theme.colors.headingPrimary};
  border-radius: 3.2rem;
  padding: 1rem 2.8rem;
`;

type CartItemCountProps = {
  orderType: string;
};

function CartItemCount({ orderType }: CartItemCountProps) {
  const [, cartStore] = useCartStore();

  return (
    <Wrapper>
      <ShoppingCartImg src='/images/shopping-cart.png' alt='shopping_cart' />
      <Title>주문내역</Title>
      <TotalCount>{cartStore.totalItemNum()}개</TotalCount>
      <OrderType>[{orderType}]</OrderType>
    </Wrapper>
  );
}

export default CartItemCount;
