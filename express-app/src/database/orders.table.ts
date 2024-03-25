import OrderTableType from '../types/OrderTableType';

const orders: OrderTableType[] = [
  {
    id: '1710470369910',
    orderType: '매장 주문',
    status: '주문완료',
    totalPrice: 8000,
    createAt: new Date('2023-03-15T10:10:00'),
    updateAt: new Date('2023-03-15T10:10:00'),
    menuItems: [
      {
        id: 1,
        name: '김밥',
        price: 5000,
        image: 'imageurl',
        totalPrice: 10000,
        quantity: 1,
        restaurantName: '레스토랑',
        categoryName: '한식',
      },
    ],
  },
];

export default orders;
