import Food from '../types/food';

export default function getTotalPrice(menu:Food[]) {
  return menu.reduce((acc, food) => acc + food.price, 0);
}
