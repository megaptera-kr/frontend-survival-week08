import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import Receipt from '../types/Receipt';

import orderComplete from '../../static/images/complete.png';

const OrderCompleteImgWrap = styled.li`
  width: 100%;
  height: 160px;
  img {
    width: 120px;
    height: 120px;
    display: block;
    margin: 0 auto;
  }
`;

const OrderCompleteMsg = styled.li`
width: 100%;
height: 210px;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  letter-spacing: -0.03em;
  font-family: 'yg-jalnan';
`;

const ReceiptNumber = styled.li`
  width: 100%;
  height: 120px;
  font-weight: 500;
  font-size: 48px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.orderNumber};
  text-align: center;
`;

const ReceiptLine = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.orderNumber};
`;

export default function OrderNumber() {
  const defaultReceipt = {} as Receipt;
  const [receipt] = useLocalStorage('receipt', defaultReceipt);

  return (
    <>
      <ul>
        <OrderCompleteImgWrap>
          <img src={orderComplete} alt="order-complete" />
        </OrderCompleteImgWrap>
        <OrderCompleteMsg>
          주문이
          <br />
          완료되었습니다!
        </OrderCompleteMsg>
        <ReceiptNumber>
          주문번호
          {receipt.id}
        </ReceiptNumber>
      </ul>
      <ReceiptLine />
    </>
  );
}
