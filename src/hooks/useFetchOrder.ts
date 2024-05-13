import { useEffect, useState } from 'react';
import BASE_URL from '../api';
import OrderType from '../types/order';

export default function useFetchOrder(orderId:string) {
  const [order, setOrder] = useState<OrderType|null>(null);

  useEffect(() => {
    async function getOrder() {
      const response = await fetch(`${BASE_URL}/orders/${orderId}`);
      const data = await response.json();

      setOrder(data.order);
    }

    getOrder();
  }, []);

  return order;
}
