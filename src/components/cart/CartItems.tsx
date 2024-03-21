import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import CartItem from './CartItem';

import CartItemModel from '../../models/CartItemModel';

const Wrapper = styled.section`
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(10px, auto);
  align-items: center;
  font-family: pretendard-regular;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  gap: 20px 20px;
  padding-bottom: 40px;
`;

export default function CartItems() {
  const [snapshot] = useCartStore();
  const { cartItems } = snapshot;

  return (
    <Wrapper>
      {cartItems.map((cartItem: CartItemModel) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </Wrapper>
  );
}
