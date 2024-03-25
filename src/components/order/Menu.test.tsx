import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Menu from './Menu';

import order from '../../../fixtures/order';

describe('Menu', () => {
  it('renders title', () => {
    renderWithProviders(<Menu order={order} />);

    screen.getByText(/주문목록/);
  });

  it('renders food list', () => {
    renderWithProviders(<Menu order={order} />);

    const { menu } = order;

    menu.forEach((food) => screen.getByText(new RegExp(food.name)));
  });

  it('renders totalPrice', () => {
    renderWithProviders(<Menu order={order} />);

    screen.getByText(new RegExp(`${order.totalPrice.toLocaleString()}원`));
  });
});
