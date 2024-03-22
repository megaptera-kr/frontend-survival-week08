import styled from 'styled-components';

import { useNavigate } from 'react-router';

import useCartStore from '../../hooks/useCartStore';
import useCreateOrder from '../../hooks/useCreateOrder';

import Button from '../common/Button';

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 3.2rem 3.2rem;
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

const Cancel = styled(Button)`
  flex-grow: 1;
  background-color: #44272b;
  font-size: 3.2rem;
  color: white;
  padding: 3.2rem 0;
  border-radius: 60px;
`;

const Order = styled(Button)`
  background-color: #ff8400;
  flex-grow: 1;
  font-size: 3.2rem;
  color: white;
  padding: 3.2rem 0;
  border-radius: 60px;
`;

type CartButtonsProps = {
  orderType: string;
};

export default function CartButtons({ orderType }: CartButtonsProps) {
  const navigate = useNavigate();
  const [, cartStore] = useCartStore();
  const { handleCreateOrder } = useCreateOrder({
    cart: cartStore.getCart(),
    orderType,
  });

  const handleCancel = () => {
    cartStore.clear();
    navigate('/');
  };

  const handleOrder = () => {
    handleCreateOrder();
  };

  return (
    <Wrapper>
      <Cancel onClick={handleCancel}>취소</Cancel>
      <Order onClick={handleOrder}>주문하기</Order>
    </Wrapper>
  );
}
