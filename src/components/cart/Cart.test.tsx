import renderWithProviders from '../../testHelper';
import Cart from './Cart';

test('Cart', () => {
  const orderType = '매장주문';
  renderWithProviders(<Cart orderType={orderType} />);
});
