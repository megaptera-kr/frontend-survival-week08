import OrderType from '../src/types/order';

const order: OrderType = {
  id: '12345',
  menu: [
    {
      id: '1',
      name: '짜장면',
      price: 8000,
      image: 'image1.png',
    },
    {
      id: '2',
      name: '김밥',
      price: 6000,
      image: 'image2.png',
    },
  ],
  totalPrice: 14000,
};

export default order;
