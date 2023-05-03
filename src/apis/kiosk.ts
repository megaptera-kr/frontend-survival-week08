import type * as type from '../types/kiosk';
import ax from './axios';

export const fetchRestaurants = async (): Promise<type.RestaurantsResponse> => {
  const res = await ax.get('/restaurants');

  return res.data;
};

export const orderCart = async (
  req: type.OrderRequest,
): Promise<type.OrderResponse> => {
  const res = await ax.post('/orders', req);

  return res.data;
};

export const fetchOrderInfo = async (
  req: type.OrderInfoRequest,
): Promise<type.OrderInfoResponse> => {
  const res = await ax.get(`/orders/${req.id}`);

  return res.data;
};
