import { render, screen } from '@testing-library/react';
import ReceiptList from '.';

function renderReceiptList() {
  render(<ReceiptList />);
}

describe('ReceiptList', () => {
  beforeEach(() => {
    renderReceiptList();
  });

  it('renders 주문목록, 총 가격', () => {
    const title = screen.getByText(/주문목록/);
    const totalPriceText = screen.getByText(/총 가격/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });
});
