import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router';

import useReadOrder from '../hooks/useReadOrder';

import OrderCompleteMessage from '../components/order/OrderCompleteMessage';
import OrderItems from '../components/order/OrderItems';
import OrderCompleteButtom from '../components/order/OrderCompleteButtom';
import HorizontalLine from '../components/common/HorizontalLine';
import { WordH2 } from '../components/common/Word';
import Button from '../components/common/Button';

const Wrapper = styled.div`
  background-color: white;
  border-top-right-radius: 80px;
  height: 100vh;
`;

const Word = styled(WordH2)`
  font-family: 'normal';
  font-weight: 700;
  color: black;
  font-size: 4.2rem;
  text-align: start;
  margin: 40px 0;
  padding-left: 20px;
`;

const BackButtonWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const BackButton = styled(Button)`
  flex-grow: 1;
  background-color: #ff8400;
  font-size: 2.8rem;
  color: white;
  border-radius: 80px;
  padding: 32px;

  :hover {
    background-color: #eb7a00;
  }
`;

export default function OrderCompletePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderId = state?.orderId;
  if (!orderId) {
    return <i>주문 ID를 찾을 수 없습니다</i>;
  }

  const { receipt } = useReadOrder({ orderId });
  if (!receipt) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <OrderCompleteMessage receipt={receipt} />
      <HorizontalLine />
      <Word text='주문목록' />
      <OrderItems orderItems={receipt.menuItems} />
      <OrderCompleteButtom
        formattedTotalPrice={receipt.formattedTotalPrice()}
      />
      <BackButtonWrapper>
        <BackButton onClick={() => navigate('/')}>
          메인화면으로 돌아가기
        </BackButton>
      </BackButtonWrapper>
    </Wrapper>
  );
}
