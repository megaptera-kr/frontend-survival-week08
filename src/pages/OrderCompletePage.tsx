import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router';

import useReadOrder from '../hooks/useReadOrder';

import OrderCompleteMessage from '../components/order/OrderCompleteMessage';
import OrderItems from '../components/order/OrderItems';
import OrderCompleteButtom from '../components/order/OrderCompleteButtom';
import HorizontalLine from '../components/common/HorizontalLine';

import Button from '../components/common/Button';
import Paragraph from '../components/common/Paragraph';
import Text from '../components/common/Text';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.subBackground};
  border-top-right-radius: 80px;
  /* height: 100vh; */ // TODO: to remove
`;

const SubWrapper = styled.div`
  padding: 0 40px;
`;

const Title = styled(Text)`
  display: block;
  color: ${(props) => props.theme.colors.bodyPrimary};
  font-size: 4.2rem;
  margin: 20px 20px;
  padding-top: 10px;
`;

const BackButtonWrapper = styled.div`
  padding-top: 300px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const BackButton = styled(Button)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bodyHighlight};
  color: ${(props) => props.theme.colors.buttonPrimary};
  font-size: 3.2rem;
  border-radius: 80px;
  padding: 32px;
  font-family: ${(props) => props.theme.font.main};
  font-weight: bold;

  :hover {
    background-color: #eb7a00;
  }
`;

export default function OrderCompletePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderId = state?.orderId;
  if (!orderId) {
    return <Paragraph>주문 ID를 찾을 수 없습니다</Paragraph>;
  }

  const { receipt } = useReadOrder({ orderId });
  if (!receipt) {
    return <Paragraph>Loading...</Paragraph>;
  }

  return (
    <Wrapper>
      <SubWrapper>
        <OrderCompleteMessage receipt={receipt} />
        <HorizontalLine />
        <Title>주문목록</Title>
        <OrderItems orderItems={receipt.menuItems} />
        <OrderCompleteButtom
          formattedTotalPrice={receipt.formattedTotalPrice()}
        />
        <BackButtonWrapper>
          <BackButton onClick={() => navigate('/')}>
            메인화면으로 돌아가기
          </BackButton>
        </BackButtonWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
