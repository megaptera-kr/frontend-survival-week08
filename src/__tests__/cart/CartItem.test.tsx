import { screen, fireEvent } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import CartItem from '../../components/cart/CartItem';

const context = describe;

describe('<CartItem />', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8000,
    image: 'IMAGE',
  };
  const index = 0;
  const handleClickRemoveItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartItem = () => {
    renderWithProviders((
      <CartItem
        food={food}
        index={index}
        onClickRemoveItem={handleClickRemoveItem}
      />
    ));
  };

  it('renders cart item info', () => {
    renderCartItem();
    screen.getByText('짜장면');
    screen.getByText(/8,000/);
  });

  context('when the user clicks the remove item button', () => {
    it('call the click handler', () => {
      renderCartItem();
      fireEvent.click(screen.getByText(/X/));
      expect(handleClickRemoveItem).toBeCalledWith(index);
    });
  });
});
