import { useFetch } from 'usehooks-ts';

import { Order } from '../types/order';

const BASE_URL = 'http://localhost:3000';

type OrderRes = {
  order: Order;
}

export default function useFetchOrder(orderId: string) {
  const { data } = useFetch<OrderRes>(`${BASE_URL}/orders/${orderId}`);

  // console.log(data);

  // if (!data) {
  //   return {} as Order;
  // }

  return data?.order;
}
