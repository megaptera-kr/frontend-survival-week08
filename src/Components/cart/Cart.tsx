import { useNavigate } from 'react-router';

import styled from 'styled-components';
import useStore from '../../hooks/useStore';
import useCreateOrder from '../../hooks/useCreateOrder';

import CartItem from './CartItem';
import OrderBtn from './OrderBtn';

import OrderSummary from './OrderSummary';

const StyledContainer = styled.div`
  background: ${(props) => props.theme.colors.menuCard};
  padding: 5rem;
`;

const StyledWrrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  gap: 3rem;
`;

export default function Cart() {
  const navigate = useNavigate();

  const store = useStore();

  const { createOrder } = useCreateOrder();

  const handleRemoveMenu = (targetIdx: number) => {
    store.removeMenu(targetIdx);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const clearMenu = () => {
    store.clear();
    navigateToHome();
  };

  const orderMenu = async () => {
    if (!store.menu.length) {
      return;
    }

    const id = await createOrder(store.menu);
    store.clear();
    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <StyledContainer>
      <OrderSummary selectedMenu={store.menu} />
      <StyledWrrapper>
        {store.menu.map((food, index) => {
          const key = `${food}-${index}`;
          return (
            <CartItem
              key={key}
              food={food}
              handleRemoveMenu={handleRemoveMenu}
              index={index}
            />
          );
        })}
      </StyledWrrapper>
      <OrderBtn clearMenu={clearMenu} orderMenu={orderMenu} />
    </StyledContainer>
  );
}
