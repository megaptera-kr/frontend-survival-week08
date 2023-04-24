import Menu from '../types/Menu';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Menu[]) => {
    const totalPrice = calculateTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { id } = await response.json();

    return id;
  };

  return {
    createOrder,
  };
}
