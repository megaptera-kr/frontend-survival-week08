import MenuItemModel from './MenuItemModel';

test('MenuItemModel', () => {
  const obj = {
    id: 1,
    name: '김밥',
    price: 3000,
    image: '/image/test.png',
    totalPrice: 9000,
    quantity: 3,
    restaurantName: '메가분식',
    categoryName: '분식',
  };

  const model = new MenuItemModel(obj);

  expect(model).not.toBeNull();
  expect(model.id).toBe(obj.id);
  expect(model.name).toBe(obj.name);
  expect(model.price).toBe(obj.price);
  expect(model.image).toBe(obj.image);
  expect(model.totalPrice).toBe(obj.totalPrice);
  expect(model.quantity).toBe(obj.quantity);
  expect(model.restaurantName).toBe(obj.restaurantName);
  expect(model.categoryName).toBe(obj.categoryName);
  expect(model.priceFormat()).toBe('3,000');
  expect(model.totalPriceFormat()).toBe('9,000');
});
