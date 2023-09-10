import { useNavigate } from 'react-router';
import styled from 'styled-components';

import useCartStore from '../../hooks/useCartStore';
import useCreateOrder from '../../hooks/useCreateOrder';

import Summary from './Summary';
import CartItem from './CartItem';
import CartButtons from './CartButtons';

const CartWrap = styled.div`
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.cartBg};
`;

const CartItemsWrap = styled.ul`
  display: grid;
  margin-block: 2em;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5em;
`;

export default function Cart() {
  const navigate = useNavigate();
  const [{ menu }, store] = useCartStore();
  const createOrder = useCreateOrder(menu);

  const handleClickRemoveItem = (index: number) => {
    store.removeItem(index);
  };

  const handleClickCancel = () => {
    store.clearItem();
    navigate({ pathname: '/' });
  };

  const handleClickOrder = async () => {
    if (!menu.length) return;

    const id = await createOrder();
    store.clearItem();
    navigate({ pathname: '/order/complete', search: `?orderId=${id}` });
  };

  return (
    <CartWrap>
      <Summary cartMenu={menu} />
      <CartItemsWrap>
        {menu.map((food, i) => {
          const key = `${i}-${food.id}`;
          return (
            <CartItem
              key={key}
              food={food}
              index={i}
              onClickRemoveItem={handleClickRemoveItem}
            />
          );
        })}
      </CartItemsWrap>
      <CartButtons onClickCancel={handleClickCancel} onClickOrder={handleClickOrder} />
    </CartWrap>
  );
}
