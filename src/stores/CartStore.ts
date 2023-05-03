import { singleton } from 'tsyringe';

import ObjectStore from './ObjectStore';
import type { CartItem, Food } from '../types/kiosk';

@singleton()
export default class CartStore extends ObjectStore {
  cart: CartItem[] = [];

  size = () => this.cart.length;

  getTotalPrice = () => [...this.cart].reduce((acc, item) => acc + item.price, 0);

  addCartItem = (food: Food) => {
    this.cart = [...this.cart, { ...food, id: `${this.size() + 1}` }];
    this.publish();
  };

  removeCartItem = (id: string) => {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.publish();
  };

  clear = () => {
    this.cart = [];
    this.publish();
  };
}
