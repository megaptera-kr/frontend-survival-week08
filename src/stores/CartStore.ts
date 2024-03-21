import { singleton } from 'tsyringe';

import BaseStore from './BaseStore';

import CartItemModel from '../models/CartItemModel';
import MenuItemType from '../types/MenuItemType';

export type CartStoreSnapshot = {
  items: CartItemModel[];
  totalPrice: number;
};

@singleton()
class CartStore extends BaseStore<CartStoreSnapshot> {
  private cart = new CartModel();

  constructor() {
    super();
    this.takeSnapshot();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.cart.items,
      totalPrice: this.cart.totalPrice,
    };
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  add({ id, name, price, image }: MenuItemType) {
    this.cart = this.cart.addItem({ id, name, price, image });
    this.update();
  }

  remove({ cartId }: { cartId: number }) {
    this.cart = this.cart.removeItem(cartId);
    this.update();
  }

  clear() {
    this.cart = this.cart.clear();
    this.update();
  }
}

export default CartStore;
