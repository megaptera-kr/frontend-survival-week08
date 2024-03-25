import cart from './cart';

import Restaurant from '../src/types/Restaurant';

const BASE_IMAGE_URL = 'http://localhost:3000/images';

const restaurants : Restaurant[] = [
  {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '메가반점',
    menu: [
      {
        id: 'MENU_01',
        name: '짜장면',
        price: 8000,
        image: `${BASE_IMAGE_URL}/food1.png`,
      },
    ],
  },
  {
    id: 'RESTAURANT_02',
    category: '한식',
    name: '메리김밥',
    menu: [
      {
        id: 'MENU_03',
        name: '김밥',
        price: 3_000,
        image: `${BASE_IMAGE_URL}/food4.png`,
      },
    ],
  },
  {
    id: 'RESTAURANT_03',
    category: '일식',
    name: '혹등고래카레',
    menu: [
      {
        id: 'MENU_04',
        name: '카레',
        price: 10_000,
        image: `${BASE_IMAGE_URL}/food13.png`,
      },
    ],
  },
];

export default restaurants;
