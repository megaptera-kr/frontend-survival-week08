import { Menu } from '../types/restaurants';

export default function calcTotalPrice(menu: Menu[]) {
  return menu.reduce((acc, food) => acc + food.price, 0);
}
