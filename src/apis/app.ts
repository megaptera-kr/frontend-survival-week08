import axios from 'axios';
import { Order, Receipt, Restaurant } from '../types/restaurant';
import { GetRestaurantResponse, PostOrderRequest, PostOrderResponse } from './dto';

const API_URI = 'http://localhost:3000';

export const getRestaurant = async (): Promise<Restaurant[]> => {
  try {
    const { data } = await axios.get<null, GetRestaurantResponse>(`${API_URI}/restaurants`);

    return data.restaurants || [];
  } catch (e) {
    return [];
  }
};

export const getOrder = async (id: string): Promise<Order> => {
  try {
    const { data } = await axios.get<null, { data: { order: Order } }>(`${API_URI}/orders/${id}`);

    return data.order || {};
  } catch (e) {
    return {} as Order;
  }
};

export const postOrders = async (payload: PostOrderRequest): Promise<{ id: string }> => {
  try {
    const { data } = await axios.post<PostOrderRequest, PostOrderResponse>(`${API_URI}/orders`, payload);

    return { id: data.id };
  } catch (e) {
    return {} as { id: string };
  }
};
