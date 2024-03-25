import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';

import Button from '../common/Button';

import CartItemModel from '../../models/CartItemModel';
import Text from '../common/Text';

type CartItemProp = {
  cartItem: CartItemModel;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.cartItemBackground};
  border-radius: 20px;
  position: relative;
`;

const MenuName = styled(Text)`
  font-size: 3.2rem;
  margin: 2.2rem 3rem;
`;

const MenuCount = styled(Text)`
  font-size: 3.2rem;
  padding-left: 8px;
`;

const MenuPrice = styled(Text)`
  color: ${(props) => props.theme.colors.bodyHighlight};
  font-size: 3.2rem;
  margin: 2.2rem 3rem;
  font-weight: 500;
`;

const CancelButton = styled(Button)`
  font-family: ${(props) => props.theme.font.main};
  font-size: 2.2rem;
  font-weight: bold;
  padding: 1.6rem 2.4rem;
  position: absolute;
  top: 8px;
  left: 80%;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.headingSecondary};

  :hover {
    color: ${(props) => props.theme.colors.headingPrimary};
    background-color: ${(props) => props.theme.colors.highlightBackground};
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
