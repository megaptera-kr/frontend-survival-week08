import axios from 'axios';
import { Order, Restaurant } from '../types/restaurant';
import { GetRestaurantResponse, PostOrderRequest, PostOrderResponse } from './dto';

const API_URI = 'http://localhost:3000';

export const getRestaurant = async (): Promise<Restaurant[]> => {
  try {
    const restaurants = await axios.get<null, GetRestaurantResponse>(`${API_URI}/restaurants`);

    return restaurants || [];
  } catch (e) {
    return [];
  }
};

export const getOrder = async (id: string): Promise<Order> => {
  try {
    const order = await axios.get<null, Order>(`${API_URI}/orders/${id}`);

    return order || {};
  } catch (e) {
    return {} as Order;
  }
};

export const postOrders = async (data: PostOrderRequest): Promise<PostOrderResponse> => {
  try {
    const res = await axios.post<PostOrderRequest, PostOrderResponse>(`${API_URI}/orders`, data);
    return res;
  } catch (e) {
    return {} as PostOrderResponse;
  }
};
