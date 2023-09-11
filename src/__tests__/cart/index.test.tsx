import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import Cart from '../../components/cart';

jest.mock('../../hooks/useCartStore.ts');

describe('<Cart />', () => {
  const rednerCart = () => {
    renderWithProviders(<Cart />);
  };

  it('renders without crash', () => {
    rednerCart();
    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });

  it('renders total count and price', () => {
    rednerCart();
    screen.getByText(/3개/);
    screen.getByText(/27,000/);
  });
});
