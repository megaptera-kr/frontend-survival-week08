import * as S from './OrderCompleteMessage.styled';

interface OrderCompleteMessageProps {
  orderId: string;
}

export default function OrderCompleteMessage({ orderId }: OrderCompleteMessageProps) {
  return (
    <S.OrderCompleteMessage>
      <img src="/images/complete.png" alt="" />
      <h2>
        주문이 완료되었습니다!
      </h2>
      <strong>{`주문번호 ${orderId}`}</strong>
    </S.OrderCompleteMessage>
  );
}
