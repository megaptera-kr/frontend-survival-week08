import { moneyformat } from '../utils/common';

import MenuItemType from '../types/MenuItemType';

class MenuItemModel {
  id: number;

  name: string;

  price: number;

  image: string;

  constructor({ id, name, price, image }: MenuItemType) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }

  priceFormat(): string {
    return moneyformat(this.price);
  }

  namePriceForamt(): string {
    return `${this.name} ${this.priceFormat()}원`;
  }
}

export default MenuItemModel;
