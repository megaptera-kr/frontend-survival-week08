import styled from 'styled-components';

import Img from '../common/Image';
import Text from '../common/Text';
import ReceiptModel from '../../models/ReceiptModel';
import Heading from '../common/Heading';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const OrderCompleteImage = styled(Img)`
  width: 100px;
  padding: 10px 0;
`;

const Title = styled(Heading)`
  color: ${(props) => props.theme.colors.bodyPrimary};
  text-align: center;
  font-size: 6.2rem;
  line-height: 7.4rem;
`;

const OrderId = styled(Text)`
  font-size: 3.8rem;
  color: ${(props) => props.theme.colors.bodyPrimary};
  opacity: 80%;
`;

type OrderCompleteMessageProps = {
  receipt: ReceiptModel;
};

export default function OrderCompleteMessage({
  receipt,
}: OrderCompleteMessageProps) {
  return (
    <Wrapper>
      <OrderCompleteImage src='/images/complete.png' alt='order_complete' />
      <Title>
        [{receipt.orderType}]주문이
        <br />
        완료되었습니다!
        <br />
      </Title>
      <OrderId>주문번호 {receipt.id}</OrderId>
    </Wrapper>
  );
}
