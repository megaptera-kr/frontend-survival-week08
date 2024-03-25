import RestaurantModel from './RestaurantModel';

test('RestaurantModel', () => {
  const obj = {
    id: 1,
    category: '중식',
    name: '메가반점',
    menu: [
      { id: 1, name: '짜장면', price: 8000, image: '/image/test.png' },
      { id: 2, name: '짬뽕', price: 8000, image: '/image/test.png' },
      { id: 3, name: '차돌짬뽕', price: 9000, image: '/image/test.png' },
      { id: 4, name: '탕수육', price: 14000, image: '/image/test.png' },
    ],
  };

  const restaurant = new RestaurantModel({
    id: obj.id,
    category: obj.category,
    name: obj.name,
    menu: obj.menu,
  });

  expect(restaurant.id).toBe(obj.id);
  expect(restaurant.category).toBe(obj.category);
  expect(restaurant.name).toBe(obj.name);
  expect(restaurant.menu.length).toBe(obj.menu.length);
});
