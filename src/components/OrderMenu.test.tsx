import { screen } from '@testing-library/react';
import OrderMenu from './OrderMenu';
import fixtures from '../../fixtures';
import { renderWithProviders } from '../testHelper';

describe('OrderMenu', () => {
  const { order } = fixtures;

  it('renders OrderMenu', () => {
    renderWithProviders((
      <OrderMenu
        order={order}
      />
    ));

    screen.getByText(/주문목록/);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
    screen.getByText(/짬뽕/);
    screen.getByText(/5,000원/);
    screen.getByText(/총 가격/);
    screen.getByText(/13,000원/);
  });

  it('renders food list', () => {
    renderWithProviders(<OrderMenu order={order} />);

    const { menu } = order;

    menu.forEach((food) => screen.getByText(new RegExp(food.name)));
  });

  it('renders total price', () => {
    renderWithProviders(<OrderMenu order={order} />);

    const { totalPrice } = order;

    screen.getByText(new RegExp(`${totalPrice.toLocaleString()}원`));
  });
});
