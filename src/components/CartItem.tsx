import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

const CartWrap = styled.div`
  /* padding: 3%; */
`;

const CartItemCardWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* justify-content: center; */
`;

const CartItemCard = styled.li`
  width: 30%;
  height: 156px;
  background: ${(props) => props.theme.colors.cartItemBackground};
  border-radius: 20px;

  .cancle-order{
    cursor: pointer;
  }
`;

export default function CartItem() {
  const defaultCart = [] as Menu[];
  const [cart, setCart] = useLocalStorage('cart', defaultCart);

  const handleCancel = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <CartWrap>
      <CartItemCardWrap>
        {
          cart.map((menu, key) => (
            <CartItemCard key={`${menu.name + key + 1}`}>
              <div>
                <span>{menu.name}</span>
                <span
                  className="cancle-order"
                  aria-hidden="true"
                  onClick={
                    () => {
                      handleCancel(key);
                    }
                  }
                >
                  X
                </span>
              </div>
              <div>
                {menu.price.toLocaleString()}
              </div>
            </CartItemCard>
          ))
        }
      </CartItemCardWrap>
    </CartWrap>
  );
}
