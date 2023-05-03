/* eslint-disable react/require-default-props */
import { useFetchOrderInfo } from '../../../services/useKiosk';
import * as S from './Receipts.styled';

interface ReceiptsProps {
  orderId: string;
}

export default function Receipts({ orderId }: ReceiptsProps) {
  const { data: receipts } = useFetchOrderInfo(orderId);

  return (
    <S.Receipts>
      <h3>주문목록</h3>
      <S.ReceiptInfo>
        {receipts?.menu.map((menu) => (
          <div key={menu.id}>
            <dt>{menu.name}</dt>
            <dd>{`${menu.price.toLocaleString()}원`}</dd>
          </div>
        ))}
      </S.ReceiptInfo>
      <S.TotalPrice>
        <dt>총 가격</dt>
        <dd>{`${receipts.totalPrice.toLocaleString()}원`}</dd>
      </S.TotalPrice>
    </S.Receipts>
  );
}
