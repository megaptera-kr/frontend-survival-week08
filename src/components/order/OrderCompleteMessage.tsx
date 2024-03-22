import styled from 'styled-components';

import Img from '../common/Image';
import Span from '../common/Span';
import ReceiptModel from '../../models/ReceiptModel';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const OrderCompleteImage = styled(Img)`
  width: 100px;
`;

const Paragraphs = styled.p`
  text-align: center;
  color: black;
  font-size: 5.8rem;
  line-height: 6.8rem;
`;

const OrderId = styled(Span)`
  font-family: pretendard-regular;
  font-size: 3.8rem;
  color: #6a6a6a;
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
      <Paragraphs>
        [{receipt.orderType}]주문이
        <br />
        완료되었습니다!
        <br />
      </Paragraphs>
      <OrderId>주문번호 {receipt.id}</OrderId>
    </Wrapper>
  );
}
