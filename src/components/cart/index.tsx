/* eslint-disable comma-dangle */
import styled from 'styled-components';

import { useSyncExternalStore } from 'react';

import { useNavigate } from 'react-router';

import { CartStore } from '../../stores/CartStore';

import ItemWrapStyle from '../../styles/ItemWrapStyle';

import Summary from './Summary';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';

import useCreateOrder from '../../hooks/useCreateOrder';

const CartWrapStyle = styled.section`
  padding: 5rem;
  background-color: ${(props) => props.theme.items.itemBg};
`;

export default function Cart() {
  const { createOrder } = useCreateOrder();
  const navigate = useNavigate();

  const items = useSyncExternalStore(
    CartStore.subscribe,
    CartStore.getSnapshot
  );

  const handleClickCancel = () => {
    CartStore.resetAllItems();
    navigate('/');
  };

  const handleClickOrder = async () => {
    if (!items.length) {
      return;
    }
    const id = await createOrder(items);

    navigate(`/order/complete?orderId=${id}`, { replace: true });

    CartStore.resetAllItems();
  };

  return (
    <CartWrapStyle>
      <Summary menu={items} />
      <ItemWrapStyle>
        {items.map((food, index) => {
          const key = `${food}_${index}`;
          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              removeItem={CartStore.removeItem}
            />
          );
        })}
      </ItemWrapStyle>
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </CartWrapStyle>
  );
}
