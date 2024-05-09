import useFetchOrder from '../../../hooks/useFetchOrder';
import convertKRW from '../../../utils/convertKRW';

type ReceiptListProps = {
  orderId:string
}

function ReceiptList({ orderId }:ReceiptListProps) {
  const order = useFetchOrder(orderId);

  if (!order) {
    return null;
  }

  return (
    <div>
      <h3>주문목록</h3>

      <ul>
        {order.menu.map((food) => (
          <li key={food.id}>
            <span>{food.name}</span>
            <span>{`${convertKRW(food.price)}원`}</span>
          </li>
        ))}
      </ul>

      <div>
        <span>총 가격</span>
        <span>{`${convertKRW(order.totalPrice)}원`}</span>
      </div>
    </div>
  );
}

export default ReceiptList;
