import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useOrderStore from '../../hooks/useOrderStore';
import CompleteHeader from './CompleteHeader';
import GoBackHomeButton from './GoBackHomeButton';
import OrderList from './OrderList';

const Container = styled.section`
  width: 100%;
  padding: 14rem 5rem 4.8rem;
  border-top-right-radius: 8rem;
  background: ${(props) => props.theme.colors.main.background};
  color: ${(props) => props.theme.colors.sub.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function OrderContainer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [{ order }, store] = useOrderStore();

  useEffect(() => {
    if (orderId) {
      store.fetchOrders(orderId);
    }
  }, [orderId]);
  return order ? (
    <Container>
      <CompleteHeader orderId={order.id} />
      <OrderList orderMenu={order.menu} totalPrice={order.totalPrice} />
      <GoBackHomeButton
        name="메인화면으로 돌아가기"
        handleClickGoHome={() => navigate('/')}
      />
    </Container>
  ) : (
    <Container>
      주문완료 내역을 조회중 입니다.
    </Container>
  );
}
