import MenuItemType from './MenuItemType';

type OrderTableType = {
  id: string;
  orderType: string;
  status: string;
  totalPrice: number;
  createAt: Date;
  updateAt: Date;
  menuItems: MenuItemType[];
};

export default OrderTableType;
