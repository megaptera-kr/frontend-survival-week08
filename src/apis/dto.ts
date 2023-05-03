import {
  CartItem, Restaurant,
} from '../types/restaurant';

export type GetRestaurantResponse = { data: { restaurants: Restaurant[] } }

export type PostOrderRequest = CartItem

export type PostOrderResponse = { data: { id: string } }
