import styled from 'styled-components';

import { useNavigate } from 'react-router';

import useCartStore from '../../hooks/useCartStore';
import useCreateOrder from '../../hooks/useCreateOrder';

import Button from '../common/Button';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.cartBackground};
  padding: 20px 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Cancel = styled(Button)`
  flex-basis: 50%;
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  font-family: ${(props) => props.theme.font.main};
  font-size: 3.2rem;
  padding: 3.2rem 0;
  border-radius: 60px;
`;

const Order = styled(Button)`
  flex-basis: 50%;
  background-color: ${(props) => props.theme.colors.highlightBackground};
  font-family: ${(props) => props.theme.font.main};
  font-size: 3.2rem;
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
