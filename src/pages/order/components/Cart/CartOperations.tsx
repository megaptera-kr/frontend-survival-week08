import styled from 'styled-components';

import { useNavigate } from 'react-router';

import apiPostCreateOrder from '../../../../api/apiPostCreateOrder';

import useCartStore from '../../../../hooks/useCartStore';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 2.8rem;
  padding-block: 2.9rem;
  width: 49%;
  border: 0;
  border-radius: 3em;
  color: #FFFFFF;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #44272B;

  &:hover {
    background-color: #170A0C;
  }
`;

const OrderButton = styled(Button)`
  background-color: #FF8400;

  &:hover {
    background-color: #D87000;
  }
`;

export default function CartOperations() {
  const [{ cart }, store] = useCartStore();
  const navigate = useNavigate();

  const sendToOrderComplete = (id: string) => {
    navigate(`/order/complete?orderId=${id}`);
  };

  const handleCalcelOrder = () => {
    store.clearOrder();
    navigate('/');
  };

  const handleOrderInCart = async () => {
    if (cart.length === 0) return;
    const { id } = await apiPostCreateOrder(cart);
    if (id) {
      sendToOrderComplete(id);
      store.clearOrder();
    }
  };

  return (
    <Container>
      <CancelButton
        type="button"
        onClick={handleCalcelOrder}
      >
        취소
      </CancelButton>
      <OrderButton type="button" onClick={handleOrderInCart}>
        주문하기
      </OrderButton>
    </Container>
  );
}
