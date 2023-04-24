import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

const CartItemCardWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const CartItemCard = styled.li`
  width: 31.3%;
  height: 156px;
  background: ${(props) => props.theme.colors.cartItemBackground};
  border-radius: 20px;
  padding: 30px;
  .cart-item-card{
    display: flex;
    justify-content: space-between;
  }
`;

const CartItemMenuName = styled.span`
  font-weight: 500;
  font-size: 28px;
`;

const CartItemCancleOrder = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const CartItemMenuPrice = styled.div`
  height: 70%;
  font-size: 28px;
  padding-top: 12%;
  font-weight: 500;
  color: ${(props) => props.theme.colors.cartItemPriceText};
`;

export default function CartItem() {
  const defaultCart = [] as Menu[];
  const [cart, setCart] = useLocalStorage('cart', defaultCart);

  const handleCancel = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <CartItemCardWrap>
      {
        cart.map((menu, key) => (
          <CartItemCard key={`${menu.name + key + 1}`}>
            <div className="cart-item-card">
              <CartItemMenuName>{menu.name}</CartItemMenuName>
              <CartItemCancleOrder
                aria-hidden="true"
                onClick={
                  () => {
                    handleCancel(key);
                  }
                }
              >
                X
              </CartItemCancleOrder>
            </div>
            <CartItemMenuPrice>
              {menu.price.toLocaleString()}
              원
            </CartItemMenuPrice>
          </CartItemCard>
        ))
      }
    </CartItemCardWrap>
  );
}
