import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Receipt from '.';
import fixtures from '../../../fixtures';

const { order } = fixtures;

function renderReceipt() {
  render((
    <MemoryRouter initialEntries={[`/order/complete?orderId=${order.id}`]}>
      <Receipt />
    </MemoryRouter>
  ));
}

describe('Receipt', () => {
  beforeEach(() => {
    renderReceipt();
  });

  it('it renders ReceiptHeader', () => {
    const orderIdText = screen.getByText(/주문번호/);

    expect(orderIdText).toBeInTheDocument();
  });
  it('it renders ReceiptList', async () => {
    const title = await screen.findByText(/주문목록/);
    const totalPriceText = await screen.findByText(/총 가격/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });
  it('it renders ResetButton', () => {
    const btn = screen.getByText(/메인화면으로 돌아가기/);

    expect(btn).toBeInTheDocument();
  });
});
