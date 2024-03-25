import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import CartInfoBar from './CartInfoBar';

test('CartInfoBar', () => {
  const orderType = '매장주문';
  renderWithProviders(<CartInfoBar orderType={orderType} />);

  screen.getByText('주문내역');
  screen.getByText(`[${orderType}]`);
  screen.getByText(/개/);
  screen.getByText('총 결제 예상금액');
  screen.getByText(/원/);
});
