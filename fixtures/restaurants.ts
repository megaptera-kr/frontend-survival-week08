import RestaurantType from '../src/types/RestaurantType';
import RestaurantModel from '../src/models/RestaurantModel';

const data: RestaurantType[] = [
  {
    id: 1,
    category: '중식',
    name: '메가반점',
    menu: [
      { id: 1, name: '짜장면', price: 8000, image: '/image/test.png' },
      { id: 2, name: '짬뽕', price: 8000, image: '/image/test.png' },
      { id: 3, name: '차돌짬뽕', price: 9000, image: '/image/test.png' },
      { id: 4, name: '탕수육', price: 14000, image: '/image/test.png' },
    ],
  },
  {
    id: 2,
    category: '한식',
    name: '메리김밥',
    menu: [
      { id: 5, name: '김밥', price: 3500, image: '/image/test.png' },
      { id: 6, name: '참치김밥', price: 4500, image: '/image/test.png' },
      { id: 7, name: '제육김밥', price: 5000, image: '/image/test.png' },
      { id: 8, name: '훈제오리김밥', price: 5500, image: '/image/test.png' },
      { id: 9, name: '컵라면', price: 2000, image: '/image/test.png' },
    ],
  },
];

const restaurants = data.map((item) => new RestaurantModel({ ...item }));

export default restaurants;
