import MenuItemType from './MenuItemType';

type RequestOrderType = {
  orderType: string;
  totalItemNum: number;
  totalPrice: number;
  menuItems: MenuItemType[];
};

export default RequestOrderType;
