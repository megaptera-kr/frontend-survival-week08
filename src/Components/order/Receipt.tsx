import _ from 'lodash';

import styled from 'styled-components';
import useFetchOrder from '../../hooks/useFetchOreder';

import Receipt from '../../types/Receipt';
import OrderMessage from './OrderMessage';
import OrderMenu from './OrderMenu';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.tab};
  border-top-right-radius: 3.5rem;
  padding-inline: 5rem;
  padding-top: 18rem;
  img {
    width: 12rem;
    height: 12rem;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 10rem;
  border-radius: 8rem;
  background: rgba(255, 132, 0, 1);

  font-family: "Pretendard";
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.3rem;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

type ReceiptProps = {
  orderId: string;
  navigateToHome: () => void;
};

export default function Receipt({ orderId, navigateToHome }: ReceiptProps) {
  const order = useFetchOrder({ orderId });
  return (
    <StyledContainer>
      <OrderMessage order={order} />
      {!_.isEmpty(order) ? <OrderMenu order={order} /> : null}
      <StyledButton type="button" onClick={navigateToHome}>
        메인화면으로 돌아가기
      </StyledButton>
    </StyledContainer>
  );
}
