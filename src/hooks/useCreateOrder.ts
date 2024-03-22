import { useNavigate } from 'react-router';

import OrderAPI from '../apis/OrderAPI';

import CartModel from '../models/CartModel';

const api = new OrderAPI();

type useCreateOrderReturn = {
  handleCreateOrder: () => Promise<void>;
};

function useCreateOrder({
  cart,
  orderType,
}: {
  cart: CartModel;
  orderType: string;
}): useCreateOrderReturn {
  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    if (!cart.cartItems.length) {
      return;
    }

    const response = await api.create({ cart, orderType });
    cart.clearItems();
    navigate(`/order/complete?orderId=${response.orderId}`, {
      state: { orderId: response.orderId },
    });
  };

  return { handleCreateOrder };
}

export default useCreateOrder;
