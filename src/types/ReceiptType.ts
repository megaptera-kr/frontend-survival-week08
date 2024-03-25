import MenuItemType from './MenuItemType';

type ReceiptType = {
  id: string;
  orderType: string;
  status: '매장주문완료' | '포장주문완료';
  totalPrice: number;
  createAt: Date;
  updateAt: Date;
  menuItems: MenuItemType[];
};

export default ReceiptType;
