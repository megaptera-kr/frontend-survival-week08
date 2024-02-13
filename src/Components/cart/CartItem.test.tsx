import { fireEvent, render, screen } from '@testing-library/react';

import CartItem from './CartItem';
import TestProvider from '../../hooks/TestProvider';

describe('CartIem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };
  const handleRemoveMenu = jest.fn();
  const index = 1;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartItem = () => {
    render(
      <TestProvider>
        <CartItem
          food={food}
          handleRemoveMenu={handleRemoveMenu}
          index={index}
        />
      </TestProvider>,
    );
  };

  it('render CartItem', () => {
    renderCartItem();
    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });

  it('cancel button click event', () => {
    renderCartItem();
    fireEvent.click(screen.getByText('X'));
    expect(handleRemoveMenu).toBeCalledWith(index);
  });
});
