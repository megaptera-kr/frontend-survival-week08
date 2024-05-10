import { fireEvent, screen } from '@testing-library/react';
import Intro from '.';
import renderWithThemeProvider from '../../renderWithThemeProvider';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router')),
  useNavigate: () => mockedUsedNavigate,
}));

const context = describe;
describe('Intro', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderWithThemeProvider(<Intro />);
  });

  it('it renders paragraph, "매장 주문", "전체 포장" button', () => {
    const paragraph = screen.getByText(/원하시는 주문을/);
    const hereBtn = screen.getByText(/매장 주문/);
    const toGoBtn = screen.getByText(/전체 포장/);

    expect(paragraph).toBeInTheDocument();
    expect(hereBtn).toBeInTheDocument();
    expect(toGoBtn).toBeInTheDocument();
  });

  context('if user click "매장 주문" button', () => {
    it('navigate function will be called with "/order"', () => {
      const hereBtn = screen.getByText(/매장 주문/);

      fireEvent.click(hereBtn);

      expect(mockedUsedNavigate).toHaveBeenCalledWith('/order');
    });
  });

  context('if user click "전체 포장" button', () => {
    it('navigate function will be called with "/order"', () => {
      const toGoBtn = screen.getByText(/전체 포장/);

      fireEvent.click(toGoBtn);

      expect(mockedUsedNavigate).toHaveBeenCalledWith('/order');
    });
  });
});
