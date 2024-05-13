import { fireEvent, screen } from '@testing-library/react';
import IntroButton from '.';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const goToOrder = jest.fn();

const context = describe;
describe('IntroButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderWithThemeProvider(<IntroButton goToOrder={goToOrder} />);
  });

  it('it renders "매장 주문", "전체 포장"', () => {
    const hereBtn = screen.getByText(/매장 주문/);
    const toGoBtn = screen.getByText(/전체 포장/);

    expect(hereBtn).toBeInTheDocument();
    expect(toGoBtn).toBeInTheDocument();
  });

  context('if user click button', () => {
    it('goToOrder function will be called', () => {
      const hereBtn = screen.getByText(/매장 주문/);
      const toGoBtn = screen.getByText(/전체 포장/);

      fireEvent.click(hereBtn);
      fireEvent.click(toGoBtn);

      expect(goToOrder).toHaveBeenCalledTimes(2);
    });
  });
});
