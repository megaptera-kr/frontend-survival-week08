import { Message, OrderId, SuccessMessageWrraper } from './ui';

import useGetOrderInfo from './hooks/useGetOrderInfo';

import Icon from '../../../static/icons/success.svg';

export default function SuccessMessage() {
  const { order } = useGetOrderInfo();

  const orderID = order?.id;

  return (
    <SuccessMessageWrraper $direction='center'>
      <Icon width='12rem' />
      <Message $variant='heading_04'>
        주문이
        <br />
        완료되었습니다!
      </Message>
      {orderID && <OrderId $variant='subHead_04'>{orderID}</OrderId>}
    </SuccessMessageWrraper>
  );
}
