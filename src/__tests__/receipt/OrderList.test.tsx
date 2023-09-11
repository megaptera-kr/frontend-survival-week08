import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import OrderList from '../../components/receipt/OrderList';

import fixtures from '../../../fixtures';

describe('<OrderList />', () => {
  const { order } = fixtures;
  const { menu } = order;
  const { totalPrice } = order;

  const renderOrderList = () => {
    renderWithProviders((
      <OrderList order={order} />
    ));
  };

  it('render without crash', () => {
    renderOrderList();
    screen.getByText(/주문목록/);
  });

  it('render order list', () => {
    renderOrderList();
    menu.forEach((food) => screen.getByText(food.name));
  });

  it('render total price', () => {
    renderOrderList();
    screen.getByText(new RegExp(`${totalPrice.toLocaleString()}`));
  });
});
