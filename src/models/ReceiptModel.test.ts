import ReceiptModel from './ReceiptModel';

test('ReceiptModel', () => {
  const receiptModel = new ReceiptModel({
    id: '123',
    orderType: '매장주문',
    status: '매장주문완료',
    totalPrice: 1000,
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
  });

  expect(receiptModel).not.toBeNull();
});
