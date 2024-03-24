import CartItemModel from './CartItemModel';

test('CartItemModel', () => {
  const obj = {
    menuId: 1,
    menuName: '짜장면',
    menuPrice: 8000,
    menuImage: 'image/test.png',
    quantity: 1,
    restaurantId: 1,
    restaurantName: '메가중식',
    categoryName: '중식',
  };

  const model = new CartItemModel({ ...obj });

  expect(model).not.toBeNull();
  expect(model.id).not.toBeNull();
  expect(model.menuId).toBe(obj.menuId);
  expect(model.menuName).toBe(obj.menuName);
  expect(model.menuPrice).toBe(obj.menuPrice);
  expect(model.restaurantId).toBe(obj.restaurantId);
  expect(model.restaurantName).toBe(obj.restaurantName);
  expect(model.categoryName).toBe(obj.categoryName);
  expect(model.quantity).toBe(obj.quantity);
  expect(model.formattedTotalPrice()).toBe('8,000');
});
