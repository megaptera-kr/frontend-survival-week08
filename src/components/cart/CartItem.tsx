/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */

import styled, { css } from 'styled-components';

import Food from '../../types/Food';

const CartItemStyle = styled.li`
  position: relative;
  background-color: ${(props) => props.theme.items.itemWrapBg};
  border-radius: 2rem;
  padding: 3rem;

  span {
    display: block;
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 2.8rem;
    font-weight: 500;

    &.price {
      color: #ff8400;
      margin-top: 3rem;
    }
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    width: 4rem;
    height: 4rem;
    font-size: 0;
    text-indent: -999999px;
    background-image: url('/images/clear.svg');
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2.4rem;
    cursor: pointer;

    ${(props) =>
      props.theme.themeChk === 'darkThem' &&
      css`
        background-image: url('/images/clear_dark.svg');
      `}
  }
`;

type CartItemProp = {
  index: number;
  food: Food;
  removeItem: (index: number) => void;
};

function CartItem({ index, food, removeItem }: CartItemProp) {
  const { name, price } = food;
  return (
    <CartItemStyle>
      <span>{name}</span>
      <span className="price">{`${price.toLocaleString()}원`}</span>
      <button type="button" onClick={() => removeItem(index)}>
        취소
      </button>
    </CartItemStyle>
  );
}

export default CartItem;
