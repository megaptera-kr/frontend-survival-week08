import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';
import CartItems from './CartItems';

import CartItemModel from '../../models/CartItemModel';

import fixtures from '../../../fixtures';

jest.mock('../../hooks/useCartStore');

test('CartItems', () => {
  renderWithProviders(<CartItems />);

  fixtures.cartItems.forEach((item: CartItemModel) => {
    screen.getByText(item.menuName);

    const price = `${item.formattedTotalPrice()}원`;
    screen.queryAllByText(price);
  });
});
