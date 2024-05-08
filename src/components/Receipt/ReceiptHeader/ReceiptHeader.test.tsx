import { render, screen } from '@testing-library/react';
import ReceiptHeader from '.';

function renderReceiptHeader() {
  render(<ReceiptHeader />);
}

describe('ReceiptHeader', () => {
  beforeEach(() => {
    renderReceiptHeader();
  });

  it('renders 주문번호', () => {
    const orderIdText = screen.getByText(/주문번호/);

    expect(orderIdText).toBeInTheDocument();
  });
});
