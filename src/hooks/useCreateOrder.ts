import { Menu } from '../types/restaurants';
import calcTotalPrice from '../utils/calcTotalPrice';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder(menu: Menu[]) {
  const createOrder = async () => {
    const totalPrice = calcTotalPrice(menu);
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { id }: { id: string } = await response.json();

    return id;
  };

  return createOrder;
}
