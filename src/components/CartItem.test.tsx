import { fireEvent, screen } from '@testing-library/react';
import CartItem from './CartItem';
import { renderWithProviders } from '../testHelper';

describe('CartItem', () => {
  const index = 1;

  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };

  const onClickCancel = jest.fn();

  function renderCartItem() {
    renderWithProviders((
      <CartItem
        index={index}
        food={food}
        onClickCancel={onClickCancel}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders CartItem', () => {
    renderCartItem();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('X'));

    expect(onClickCancel).toBeCalledWith(index);
  });
});
