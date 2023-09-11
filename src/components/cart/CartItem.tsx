import styled from 'styled-components';

import { Menu } from '../../types/restaurants';

const CartItemWrap = styled.li`
  position: relative;
  padding: 1em 2em;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.cartItemBg};

  & span {
    font-size: 2.8rem;
    display: block;
    padding-block: 1em;
  }

  & span:last-of-type {
    color: ${({ theme }) => theme.colors.primary};
  }

  & button {
    position: absolute;
    top: 5%;
    right: 5%;
    padding: 0.5em;
    border: none;
    font-size: 1.3em;
    background-color: transparent;
    cursor: pointer;
  }
`;

type CartItemProps = {
  food: Menu;
  index: number;
  onClickRemoveItem: (index: number) => void;
}

export default function CartItem({ food, index, onClickRemoveItem }: CartItemProps) {
  return (
    <CartItemWrap>
      <span>{food.name}</span>
      <span>{`${food.price.toLocaleString()}원`}</span>
      <button type="button" onClick={() => onClickRemoveItem(index)}>X</button>
    </CartItemWrap>
  );
}
