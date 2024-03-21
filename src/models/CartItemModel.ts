import { v4 as uuidv4 } from 'uuid';

import { moneyformat } from '../utils/common';

import CartItemType from '../types/CartItemType';
import RestaurantModel from './RestaurantModel';
import MenuItemModel from './MenuItemModel';

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

  static makeInstance({
    restaurant,
    menuItem,
    quantity,
  }: {
    restaurant: RestaurantModel;
    menuItem: MenuItemModel;
    quantity: number;
  }) {
    return new CartItemModel({
      menuId: menuItem.id,
      menuName: menuItem.name,
      menuPrice: menuItem.price,
      menuImage: menuItem.image,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      categoryName: restaurant.category,
      quantity,
    });
  }

  price(): number {
    return this.menuPrice * this.quantity;
  }

  priceFormatted(): string {
    return moneyformat(this.price());
  }
}

export default CartItemModel;
