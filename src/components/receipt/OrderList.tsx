import React from 'react';
import { Order } from '../../types/order';

type OrderListProps = {
  order: Order;
}

export default function OrderList({ order }: OrderListProps) {
  return (
    <div>
      <h3>주문목록</h3>
      <ul>
        {order?.menu.map((item, i) => {
          const key = `${i}-${item.name}`;
          return (
            <li key={key}>
              <span>{item.name}</span>
              <span>{`${item.price.toLocaleString()}원`}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <span>총가격</span>
        <span>{`${order.totalPrice.toLocaleString()}원`}</span>
      </div>
    </div>
  );
}
