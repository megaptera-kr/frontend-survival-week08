import { screen } from '@testing-library/react';
import renderWithProviders from '../../testHelper';

import CartTotalPrice from './CartTotalPrice';

test('CartTotalPrice', () => {
  renderWithProviders(<CartTotalPrice />);
  screen.getByText('총 결제 예상금액');
});
