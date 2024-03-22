import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import Button from '../common/Button';

import CartItemModel from '../../models/CartItemModel';

type CartItemProp = {
  cartItem: CartItemModel;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
`;

const MenuName = styled.span`
  color: black;
  font-size: 3.2rem;
  margin: 2.2rem 3rem;
`;

const MenuCount = styled.span`
  color: black;
  font-size: 3.2rem;
`;

const MenuPrice = styled.span`
  color: #ff8400;
  font-size: 3.2rem;
  margin: 2.2rem 3rem;
`;

const CancelButton = styled(Button)`
  font-size: 1.8rem;
  padding: 1.6rem 2.2rem;
  position: absolute;
  top: 8px;
  left: 80%;
  border-radius: 50%;

  :hover {
    background-color: #ff8400;
    color: white;
  }
`;

function CartItem({ cartItem }: CartItemProp) {
  const [, cartStore] = useCartStore();

  const { menuId, menuName, quantity } = cartItem;

  const handleCancel = () => {
    cartStore.removeItem({ menuId });
  };

  return (
    <Wrapper>
      <MenuName>
        {menuName}
        <MenuCount>{`(${quantity}개)`}</MenuCount>
      </MenuName>
      <MenuPrice>{cartItem.formattedTotalPrice()}원</MenuPrice>
      <CancelButton onClick={handleCancel}>X</CancelButton>
    </Wrapper>
  );
}

export default CartItem;
