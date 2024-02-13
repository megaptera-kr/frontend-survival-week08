import _ from 'lodash';

import styled from 'styled-components';

import Receipt from '../../types/Receipt';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 8rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.messageLine};
  img {
    width: 12rem;
    height: 12rem;
  }
`;

const StyledMessage = styled.h2`
  width: 70%;
  font-family: "Jalnan OTF";
  font-size: 8rem;
  font-weight: 700;
  line-height: 9.6rem;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${(props) => props.theme.colors.message};
`;

const StyledOrderNum = styled.p`
  font-family: "Pretendard";
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 5.8rem;
  letter-spacing: -0.03em;
  text-align: left;
  color: ${(props) => props.theme.colors.orderNum};
`;

type OrderMessageProps = {
  order: Receipt;
};

export default function OrderMessage({ order }: OrderMessageProps) {
  return (
    <StyledContainer>
      {!_.isEmpty(order) ? (
        <>
          <img src="/images/complete.png" alt="" />
          <StyledMessage>주문이 완료되었습니다!</StyledMessage>
          <StyledOrderNum>
            주문번호
            {order.id}
          </StyledOrderNum>
        </>
      ) : (
        <StyledMessage>주문이 완료되었습니다!</StyledMessage>
      )}
    </StyledContainer>
  );
}
