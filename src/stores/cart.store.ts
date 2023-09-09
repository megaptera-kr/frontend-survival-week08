import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { Menu } from '../types/restaurants';

@singleton()
@Store()
export default class CartStore {
  menu: Menu[] = [];

  @Action()
  addItem(food: Menu) {
    this.menu = [...this.menu, food];
  }

  @Action()
  removeItem(index: number) {
    this.menu = this.menu.filter((_, i) => i !== index);
  }

  @Action()
  clearItem() {
    this.menu = [];
  }
}
