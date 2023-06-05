import Food from '../type/Food';
import calcTotalPrice from '../utils/calcTotalPrice';
import extractCartItem from '../utils/extractCartItem';

export default function useFetchReceiptID() {
  const url = 'http://localhost:3000/orders';
  const totalPrice = calcTotalPrice();
  const menu = extractCartItem();
  const fetchReceiptID = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });
    const data = await response.json();
    return data;
  };
  return {
    fetchReceiptID,
  };
}
