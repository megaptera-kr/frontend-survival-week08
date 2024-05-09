import { render, screen } from '@testing-library/react';
import ReceiptHeader from '.';
import fixtures from '../../../../fixtures';

const { order } = fixtures;

function renderReceiptHeader() {
  render(<ReceiptHeader orderId={order.id} />);
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
