import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

import Menu from '../types/Menu';

@singleton()
@Store()
export default class CartStore {
  cart : Menu[] = [];

  totalPrice = 0;

  count = 0;

  @Action()
  addCart(menu: Menu) {
    this.cart = [...this.cart, menu];
    this.calcTotalPrice();
    this.calcTotalCount();
  }

  @Action()
  removeCart(index: number) {
    this.cart = this.cart.filter((_, i) => i !== index);
    this.calcTotalPrice();
    this.calcTotalCount();
  }

  @Action()
  resetCart() {
    this.cart = [];
    this.totalPrice = 0;
    this.count = 0;
  }

  @Action()
  calcTotalPrice() {
    this.totalPrice = this.cart.reduce((acc, menu) => acc + menu.price, 0);
  }

  @Action()
  calcTotalCount() {
    this.count = this.cart.length;
  }
}
