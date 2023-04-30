export type Category = '전체' | '중식' | '한식' | '일식';

export type Food = {
  id: string;
  name: string;
  price: number;
  image: string;
}

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}

export type RestaurantFilter = {
  search: string;
  category: string;
}

export type CartItem = Omit<Food, 'image'>;

export type OrderInfo = {
  id: string;
  menu: CartItem[],
  totalPrice: number;
}

export interface RestaurantsResponse {
  restaurants: Restaurant[];
}

export interface OrderRequest {
  menu: CartItem[];
  totalPrice: number;
}

export interface OrderResponse {
  id: string;
}

export interface OrderInfoRequest {
  id: string;
}

export interface OrderInfoResponse {
  order: OrderInfo;
}
