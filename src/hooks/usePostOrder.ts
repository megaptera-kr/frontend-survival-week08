import BASE_URL from '../api';
import Food from '../types/food';
import getTotalPrice from '../utils/getTotalPrice';

export default function usePostOrder() {
  const createOrder = async (menu:Food[]) => {
    const totalPrice = getTotalPrice(menu);
    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });
    const data = await response.json();

    return data.id;
  };

  return { createOrder };
}
