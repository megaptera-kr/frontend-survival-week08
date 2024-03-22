import CartItemType from './CartItemType';

type ReceiptType = {
  id: string;
  orderKind: string;
  totalPrice: number;
  status: '매장주문완료' | '포장주문완료' | '';
  menuItems: CartItemType[];
  createAt: Date;
  updateAt: Date;
};

export default ReceiptType;
