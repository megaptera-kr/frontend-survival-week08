import { v4 as uuidv4 } from 'uuid';

import { moneyformat } from '../utils/common';

import CartItemType from '../types/CartItemType';

class CartItemModel {
  readonly id: string;

  readonly menuId: number;

  readonly menuName: string;

  readonly menuPrice: number;

  readonly menuImage: string;

  readonly restaurantId: number;

  readonly restaurantName: string;

  readonly categoryName: string;

  readonly quantity: number;

  constructor({
    menuId,
    menuName,
    menuPrice,
    menuImage,
    restaurantId,
    restaurantName,
    categoryName,
    quantity,
  }: CartItemType) {
    this.id = uuidv4();
    this.menuId = menuId;
    this.menuName = menuName;
    this.menuPrice = menuPrice;
    this.menuImage = menuImage;
    this.restaurantId = restaurantId;
    this.restaurantName = restaurantName;
    this.categoryName = categoryName;
    this.quantity = quantity;
  }

  price(): number {
    return this.menuPrice * this.quantity;
  }

  priceFormatted(): string {
    return moneyformat(this.price());
  }
}

export default CartItemModel;
