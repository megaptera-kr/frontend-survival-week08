import CartItemModel from '../src/models/CartItemModel';
import CartItemType from '../src/types/CartItemType';

const data: CartItemType[] = [
  {
    menuId: 1,
    menuName: '짜장면',
    menuPrice: 8000,
    menuImage: 'image/test.png',
    quantity: 1,
    restaurantId: 1,
    restaurantName: '메가중식',
    categoryName: '중식',
  },
  {
    menuId: 2,
    menuName: '김밥',
    menuPrice: 4000,
    menuImage: 'image/test.png',
    quantity: 2,
    restaurantId: 2,
    restaurantName: '메가분식',
    categoryName: '분식',
  },
];

const cartItems = data.map((item) => new CartItemModel({ ...item }));

export default cartItems;
