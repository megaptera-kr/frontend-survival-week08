import { screen } from '@testing-library/react';
import CartHeader from '.';
import fixtures from '../../../../fixtures';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const { food } = fixtures;

const context = describe;
describe('CartHeader', () => {
  beforeEach(() => {
    renderWithThemeProvider(<CartHeader menu={food} />);
  });

  it('renders 주문내역, 총 결제 예상금액', () => {
    const title = screen.getByText(/주문내역/);
    const totalPriceText = screen.getByText(/총 결제 예상금액/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });

  context('if it received menu', () => {
    it('it renders menu length and totalPrice', () => {
      const menuLengthElem = screen.getByText(/2/);
      const totalPriceElem = screen.getByText(/14,000/);

      expect(menuLengthElem).toBeInTheDocument();
      expect(totalPriceElem).toBeInTheDocument();
    });
  });
});
