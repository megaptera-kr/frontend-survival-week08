import { useNavigate } from 'react-router';

import styled from 'styled-components';

import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';

import CartItem from './CartItem';
import OrderButton from './OrderButton';
import OrderTotalAmount from './OrderTotalAmount';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.tertiary};
`;

const ItemList = styled.ul`
  padding:0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;
  margin-block: 2em;
`;

export default function Cart() {
  const navigate = useNavigate();

  const [{ menu }, store] = useCartStore();

  const { createOrder } = useCreateOrder();

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clear();

    navigate('/');
  };

  const handleClickOrder = async () => {
    if (!menu.length) {
      return;
    }

    const id = await createOrder(menu);

    store.clear();

    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <Container>
      <OrderTotalAmount selectedMenu={menu} />
      <ItemList>
        {menu.map((menus, index) => {
          const key = `${menus.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              menu={menus}
              onClickCancel={handleClickRemove}
            />
          );
        })}
      </ItemList>
      <OrderButton
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </Container>
  );
}
