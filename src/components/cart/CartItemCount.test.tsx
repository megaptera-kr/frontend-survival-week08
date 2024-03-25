import { screen } from '@testing-library/react';
import renderWithProviders from '../../testHelper';

import CartItemCount from './CartItemCount';

jest.mock('../../hooks/useCartStore');

test('CartItemCount', () => {
  const orderType = '매장주문';
  renderWithProviders(<CartItemCount orderType={orderType} />);

  screen.getByText('주문내역');
  screen.queryByText(/개/);
  screen.getByText(/매장주문/);
});
