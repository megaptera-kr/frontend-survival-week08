import CartItemModel from './CartItemModel';
import RestaurantModel from './RestaurantModel';
import MenuItemModel from './MenuItemModel';

import NotFoundError from '../exceptions/NotFoundError';

class CartModel {
  readonly cartItems: CartItemModel[] = [];

  readonly orderKind: string;

  constructor(cartItems: CartItemModel[] = [], orderKind = '') {
    this.cartItems = cartItems;
    this.orderKind = orderKind;
  }

  #insertItem({ cartItem }: { cartItem: CartItemModel }) {
    return new CartModel([...this.cartItems, cartItem], this.orderKind);
  }

  #updateItem({ index, quantity }: { index: number; quantity: number }) {
    const cartItem: CartItemModel = this.cartItems[index];

    return new CartModel(
      [
        ...this.cartItems.slice(0, index),
        new CartItemModel({
          ...cartItem,
          quantity: cartItem.quantity + quantity,
        }),
        ...this.cartItems.slice(index + 1),
      ],
      this.orderKind,
    );
  }

  upsertItem({
    restaurant,
    menuItem,
    quantity,
  }: {
    restaurant: RestaurantModel;
    menuItem: MenuItemModel;
    quantity: number;
  }): CartModel {
    const index = this.cartItems.findIndex(
      (cartItem: CartItemModel) => cartItem.menuId === menuItem.id,
    );

    const cartItem: CartItemModel = CartItemModel.makeInstance({
      restaurant,
      menuItem,
      quantity,
    });

    return index < 0
      ? this.#insertItem({ cartItem })
      : this.#updateItem({ index, quantity });
  }

  deleteItem({ menuId }: { menuId: number }) {
    const index = this.cartItems.findIndex(
      (cartItem: CartItemModel) => cartItem.menuId === menuId,
    );

    if (index < 0) {
      throw new NotFoundError();
    }

    return new CartModel(
      [...this.cartItems.slice(0, index), ...this.cartItems.slice(index + 1)],
      this.orderKind,
    );
  }

  clearItems(): CartModel {
    this.cartItems.length = 0;
    return new CartModel([]);
  }

  totalItemNum(): number {
    return this.cartItems.reduce(
      (acc, item: CartItemModel) => acc + item.quantity,
      0,
    );
  }

  totalPrice(): number {
    return this.cartItems.reduce(
      (acc, item: CartItemModel) => acc + item.price(),
      0,
    );
  }
}

export default CartModel;
