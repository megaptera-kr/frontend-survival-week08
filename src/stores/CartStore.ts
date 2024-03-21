import { singleton } from 'tsyringe';

import BaseStore from './BaseStore';

import CartModel from '../models/CartModel';
import CartItemModel from '../models/CartItemModel';
import RestaurantModel from '../models/RestaurantModel';
import MenuItemModel from '../models/MenuItemModel';

export type CartStoreSnapshot = {
  cartItems: CartItemModel[];
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
      cartItems: this.cart.cartItems,
    };
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  addItem({
    restaurant,
    menuItem,
    quantity,
  }: {
    restaurant: RestaurantModel;
    menuItem: MenuItemModel;
    quantity: number;
  }) {
    this.cart = this.cart.upsertItem({ restaurant, menuItem, quantity });
    this.update();
  }

  removeItem({ menuId }: { menuId: number }) {
    this.cart = this.cart.deleteItem({ menuId });
    this.update();
  }

  clear() {
    this.cart = this.cart.clearItems();
    this.update();
  }

  // Properties
  totalItemNum(): number {
    return this.cart.totalItemNum();
  }

  totalPrice(): number {
    return this.cart.totalPrice();
  }

  formattedTotalPrice(): string {
    return this.cart.formattedTotalPrice();
  }
}

export default CartStore;
