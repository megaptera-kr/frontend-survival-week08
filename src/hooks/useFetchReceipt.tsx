/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';

import Receipt from '../types/Receipt';

const emptyReceipt = {} as Receipt;

export default function useFetchReceipt(orderId: string | null) {
  const [receipt, setReceipt] = useState(emptyReceipt);

  useEffect(() => {
    const fetchReceipt = async () => {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`);
      const data = await response.json();

      if (!data.order.id) {
        return {};
      }

      setReceipt(data.order);
    };

    fetchReceipt();
  }, [orderId]);

  return receipt;
}
