import { moneyformat } from '../utils/common';

import MenuItemType from '../types/MenuItemType';

class MenuItemModel {
  readonly id: number;

  readonly name: string;

  readonly price: number;

  readonly image: string;

  readonly totalPrice?: number;

  readonly quantity?: number;

  readonly restaurantName?: string;

  readonly categoryName?: string;

  constructor({
    id,
    name,
    price,
    image,
    totalPrice,
    quantity,
    restaurantName,
    categoryName,
  }: MenuItemType) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.totalPrice = totalPrice;
    this.quantity = quantity;
    this.restaurantName = restaurantName;
    this.categoryName = categoryName;
  }

  priceFormat(): string {
    return moneyformat(this.price);
  }

  totalPriceFormat(): string {
    return !this.totalPrice ? '' : moneyformat(this.totalPrice);
  }

  namePriceForamt(): string {
    return `${this.name} ${this.priceFormat()}원`;
  }
}

export default MenuItemModel;
