import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';
import CartButtons from './CartButtons';
import CartItem from './CartItem';
import Summary from './Summary';

const Container = styled.div`
  padding: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.tertiary};

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5em;
    margin-block: 2em;
  }
`;

export default function CartField() {
  const navigate = useNavigate();
  const [{ cart }, store] = useCartStore();
  const { createOrder } = useCreateOrder();

  const handleClickCartCancel = (index: number) => {
    store.cancelCart(index);
  };

  const handleClickAllCancel = () => {
    store.clear();
  };

  const handleClickOrderButton = async () => {
    if (!cart.length) {
      return;
    }

    const id = await createOrder(cart);
    navigate(`/order/complete?orderId=${id}`);
    store.clear();
  };

  return (
    <Container>
      <Summary
        selectedMenu={cart}
      />
      <ul>
        {
          cart.map((cartItem, index) => {
            const key = `cart-${cartItem.name}-${index.toString()}`;

            return (
              <CartItem
                key={key}
                cart={cartItem}
                index={index}
                onClickCancel={handleClickCartCancel}
              />
            );
          })
        }
      </ul>
      <CartButtons
        onClickAllCancel={handleClickAllCancel}
        onClickOrder={handleClickOrderButton}
      />
    </Container>
  );
}
