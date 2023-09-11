import styled from 'styled-components';

import useFetchOrder from '../../hooks/useFetchOrder';

import Message from './Message';
import OrderList from './OrderList';

import { ButtonProps } from '../../types/button';

const ReceiptWrap = styled.div`
  padding-block: 8em 3em;
  padding-inline: 3rem;
  background-color: ${({ theme }) => theme.colors.receiptPageBg};
`;

const BackToHomeButton = styled.button.attrs<ButtonProps>(({ type }) => ({
  type: type || 'button',
}))<ButtonProps>`
  width: 100%;
  padding-block: 1.2em;
  border: none;
  border-radius: 8em;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

type ReceiptProps = {
  orderId: string;
  onClickBackToHome: () => void;
}

export default function Receipt({ orderId, onClickBackToHome } : ReceiptProps) {
  const order = useFetchOrder(orderId);

  return (
    <ReceiptWrap>
      <Message orderId={orderId} />
      {order ? <OrderList order={order} /> : null}
      <BackToHomeButton onClick={onClickBackToHome}>메인화면으로 돌아가기</BackToHomeButton>
    </ReceiptWrap>
  );
}
