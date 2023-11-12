import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';
import Summary from './Summary';

const Container = styled.div`
  background: ${(props) => props.theme.colors.tertiary};
  padding: ${(props) => props.theme.sizes.contentPadding};
`;

const OrderList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-top: 4rem;
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
      <Summary selectedMenu={menu} />
      <OrderList>
        {menu.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickCancel={handleClickRemove}
            />
          );
        })}
      </OrderList>
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </Container>
  );
}
