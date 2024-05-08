import { render, screen } from '@testing-library/react';
import Receipt from '.';

function renderReceipt() {
  render(<Receipt />);
}

describe('Receipt', () => {
  beforeEach(() => {
    renderReceipt();
  });

  it('renders ReceiptHeader', () => {
    const orderIdText = screen.getByText(/주문번호/);

    expect(orderIdText).toBeInTheDocument();
  });
  it('renders ReceiptList', () => {
    const title = screen.getByText(/주문목록/);
    const totalPriceText = screen.getByText(/총 가격/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });
  it('renders ResetButton', () => {
    const btn = screen.getByText(/메인화면으로 돌아가기/);

    expect(btn).toBeInTheDocument();
  });
});
