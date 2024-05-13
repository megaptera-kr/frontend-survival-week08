import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Receipt from '.';
import fixtures from '../../../fixtures';
import renderWithMemoryRouter from '../../renderWithMemoryRouter';
import defaultTheme from '../../styles/defaultTheme';

const { order } = fixtures;

function renderReceipt() {
  const theme = defaultTheme;
  renderWithMemoryRouter(
    (
      <ThemeProvider theme={theme}>
        <Receipt />
      </ThemeProvider>
    )
    ,
    { path: `/order/complete?orderId=${order.id}` },
  );
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
