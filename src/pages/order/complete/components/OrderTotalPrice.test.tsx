import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../../testHelper';

import OrderTotalPrice from './OrderTotalPrice';

import fixtures from '../../../../../fixtures';

describe('OrderTotalPrice', () => {
  const { order } = fixtures;

  it('renders total price', () => {
    renderWithProviders(<OrderTotalPrice totalPrice={order.totalPrice} />);

    const { totalPrice } = order;

    screen.getByText(new RegExp(`${totalPrice.toLocaleString()}원`));
  });

  it('renders total price 0 ', () => {
    renderWithProviders(<OrderTotalPrice totalPrice={0} />);

    screen.getByText(/0원/);
  });
});
