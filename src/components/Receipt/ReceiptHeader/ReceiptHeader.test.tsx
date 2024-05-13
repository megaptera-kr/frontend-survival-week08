import { screen } from '@testing-library/react';
import ReceiptHeader from '.';
import fixtures from '../../../../fixtures';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const { order } = fixtures;

function renderReceiptHeader() {
  renderWithThemeProvider(<ReceiptHeader orderId={order.id} />);
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
