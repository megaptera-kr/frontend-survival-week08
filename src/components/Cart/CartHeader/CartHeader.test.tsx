import { render, screen } from '@testing-library/react';
import CartHeader from '.';

describe('CartHeader', () => {
  beforeEach(() => {
    render(<CartHeader />);
  });

  it('renders 주문내역, 총 결제 예상금액', () => {
    const title = screen.getByText(/주문내역/);
    const totalPriceText = screen.getByText(/총 결제 예상금액/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });
});
