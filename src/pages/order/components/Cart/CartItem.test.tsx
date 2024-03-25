import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../../testHelper';

import CartItem from './CartItem';

describe('CartItem', () => {
  const menu = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    renderWithProviders((
      <CartItem
        menu={menu}
      />
    ));
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });
});
