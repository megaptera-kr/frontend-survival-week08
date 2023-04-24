import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import Menu from '../types/Menu';

@singleton()
@Store()
export default class CartStore {
  menu: Menu[] = [];

  @Action()
  addMenu(menu: Menu) {
    this.menu = [
      ...this.menu,
      menu,
    ];
  }

  @Action()
  removeMenu(index: number) {
    this.menu = this.menu.filter((_, i) => i !== index);
  }

  @Action()
  clear() {
    this.menu = [];
  }
}
