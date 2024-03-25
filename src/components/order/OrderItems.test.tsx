import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import renderWithProviders from '../../testHelper';
import OrderItems from './OrderItems';

test('OrderItems', () => {
  const { receipts } = fixtures;
  const receipt = receipts[0];
  const orderItems = receipt.menuItems;

  renderWithProviders(<OrderItems orderItems={orderItems} />);

  orderItems.forEach((item) => {
    const name = `${item.name}`;
    const price = `${item.priceFormat()}`;
    const orderItemInfo = `${name} ${price}원`;

    screen.queryByText(orderItemInfo);
    screen.getByText(`${item.totalPriceFormat()}원`);
  });
});
