import Menu from './Menu';

interface OrderInfo {
  order: {
      id: string;
      menu: Menu[];
      totalPrice: number;
  }
}

export default OrderInfo;
