import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import Food from '../types/food';

@singleton()
@Store()
class CartStore {
  menu:Food[] = [];

  @Action()
  addCart(food:Food) {
    const newFood:Food = {
      ...food,
      id: Date.now().toString(),
    };

    this.menu = [...this.menu, newFood];
  }

  @Action()
  removeCart(id:string) {
    const filteredCart = this.menu.filter((food) => food.id !== id);
    this.menu = filteredCart;
  }

  @Action()
  clearCart() {
    this.menu = [];
  }
}

export default CartStore;
