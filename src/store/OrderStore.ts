import { singleton } from 'tsyringe';
import { Menu } from '../types';

@singleton()
export default class OrderStore {
  orders: Menu[] = [];

  forceUpdate: () => void;

  increase() {
    this.orders = [];
  }

  add(menu: Menu) {
    this.orders.push(menu);
    this.forceUpdate();
  }

  subtraction(menu: Menu) {
    const isExist = this.orders.filter((order) => order.name === menu.name);
    if (isExist.length > 1) {
      const findIndex = this.orders.indexOf(menu);
      this.orders.splice(findIndex, 1);
    } else {
      this.orders = this.orders.filter((order) => order.name !== menu.name);
    }
    this.forceUpdate();
  }

  reset() {
    this.orders = [];
    this.update();
  }

  update() {
    this.forceUpdate();
  }
}
