import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import renderWithProviders from '../../testHelper';
import OrderItem from './OrderItem';

test('OrderItem', () => {
  const { receipts } = fixtures;
  const receipt = receipts[0];
  const orderItem = receipt.menuItems[0];

  renderWithProviders(<OrderItem orderItem={orderItem} />);

  const name = `${orderItem.name}`;
  const price = `${orderItem.priceFormat()}`;
  const orderItemInfo = `${name} ${price}원`;

  screen.queryByText(orderItemInfo);
  screen.getByText(`${orderItem.totalPriceFormat()}원`);
});
