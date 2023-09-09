import useFetchOrder from '../../hooks/useFetchOrder';

import Message from './Message';
import OrderList from './OrderList';

type ReceiptProps = {
  orderId: string;
  onClickBackToHome: () => void;
}

export default function Receipt({ orderId, onClickBackToHome } : ReceiptProps) {
  const order = useFetchOrder(orderId);

  return (
    <div>
      <Message orderId={orderId} />
      {order ? <OrderList order={order} /> : null}
      <button type="button" onClick={onClickBackToHome}>메인화면으로 돌아가기</button>
    </div>
  );
}
