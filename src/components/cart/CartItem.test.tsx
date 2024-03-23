import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import CartItem from './CartItem';

import foods from '../../../fixtures/foods';

describe('CartItem', () => {
  const removeItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    renderWithProviders(
      <CartItem index={1} food={foods[0]} removeItem={removeItem} />,
      // eslint-disable-next-line comma-dangle
      { path: '/order' }
    );
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('짜장면');
    screen.getByText(/8,000/);
    screen.getByText(/취소/);
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText(/취소/));
    expect(removeItem).toBeCalledWith(1);
  });
});
