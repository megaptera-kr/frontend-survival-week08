import ReceiptType from '../types/ReceiptType';
import MenuItemType from '../types/MenuItemType';

import MenuItemModel from './MenuItemModel';
import { moneyformat } from '../utils/common';

class ReceiptModel {
  readonly id: string;

  readonly orderType: string;

  readonly status: '매장주문완료' | '포장주문완료';

  readonly totalPrice: number;

  readonly createAt: Date;

  readonly updateAt: Date;

  readonly menuItems: MenuItemModel[];

  constructor(object: ReceiptType) {
    this.id = object.id;
    this.orderType = object.orderType;
    this.status = object.status;
    this.totalPrice = object.totalPrice;
    this.createAt = object.createAt;
    this.updateAt = object.updateAt;
    this.menuItems = object.menuItems.map(
      (menuItem: MenuItemType) => new MenuItemModel({ ...menuItem }),
    );
  }

  formattedTotalPrice() {
    const totalPrice = this.menuItems.reduce(
      (acc, cur) => acc + (!cur.totalPrice ? 0 : cur.totalPrice),
      0,
    );

    return moneyformat(totalPrice);
  }
}

export default ReceiptModel;
