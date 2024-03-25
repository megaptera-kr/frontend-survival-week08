import { singleton } from 'tsyringe';

import ReceiptType from '../types/ReceiptType';

import CartModel from '../models/CartModel';
import CartItemModel from '../models/CartItemModel';

@singleton()
class OrderAPI {
  readonly url: URL;

  constructor() {
    this.url = new URL('http://localhost:3000/orders');
  }

  async readOne({ orderId }: { orderId: string }): Promise<ReceiptType> {
    const response = await fetch(`${this.url}/${orderId}`);
    if (!response.ok) {
      throw new Error(`Fail to get data. Status: ${response.status}`);
    }

    return response.json();
  }

  async create({
    cart,
    orderType,
  }: {
    cart: CartModel;
    orderType: string;
  }): Promise<{ orderId: string }> {
    const { cartItems } = cart;
    const body = {
      orderType,
      totalItemNum: cart.totalItemNum(),
      totalPrice: cart.totalPrice(),
      menuItems: [
        ...cartItems.map((item: CartItemModel) => ({
          id: item.menuId,
          name: item.menuName,
          price: item.menuPrice,
          image: item.menuImage,
          totalPrice: item.menuTotalPrice,
          quantity: item.quantity,
          restaurantName: item.restaurantName,
          categoryName: item.categoryName,
        })),
      ],
    };

    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Fail to create data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default OrderAPI;
