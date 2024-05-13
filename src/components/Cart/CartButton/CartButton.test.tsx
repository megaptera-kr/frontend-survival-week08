import { fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import CartButton from '.';
import renderWithMemoryRouter from '../../../renderWithMemoryRouter';
import defaultTheme from '../../../styles/defaultTheme';

const goToIntro = jest.fn();
const goToResult = jest.fn();
const theme = defaultTheme;

const context = describe;
describe('CartButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    renderWithMemoryRouter(
      (
        <ThemeProvider theme={theme}>
          <CartButton goToIntro={goToIntro} goToResult={goToResult} />
        </ThemeProvider>
      ),
      { path: '/order' },
    );
  });

  it('renders 주문하기, 취소 button', () => {
    const cancelBtn = screen.getByText(/취소/);
    const orderBtn = screen.getByText(/주문하기/);

    expect(cancelBtn).toBeInTheDocument();
    expect(orderBtn).toBeInTheDocument();
  });

  context('if user click "취소" button', () => {
    it('navigate function will be called', () => {
      const cancelBtn = screen.getByText(/취소/);
      fireEvent.click(cancelBtn);

      expect(goToIntro).toHaveBeenCalled();
    });
  });

  context('if user click "주문하기" button', () => {
    it('navigate function will be called with "/order/complete"', () => {
      const orderBtn = screen.getByText(/주문하기/);
      fireEvent.click(orderBtn);

      expect(goToResult).toHaveBeenCalled();
    });
  });
});
