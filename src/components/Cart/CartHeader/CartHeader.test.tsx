import { render, screen } from '@testing-library/react';
import CartHeader from '.';
import fixtures from '../../../../fixtures';

const { food } = fixtures;

const context = describe;
describe('CartHeader', () => {
  beforeEach(() => {
    render(<CartHeader menu={food} />);
  });

  it('renders 주문내역, 총 결제 예상금액', () => {
    const title = screen.getByText(/주문내역/);
    const totalPriceText = screen.getByText(/총 결제 예상금액/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });

  context('if it received menu', () => {
    it('it renders menu length and totalPrice', () => {
      const menuLengthElem = screen.getByText(new RegExp(`${2}`));
      const totalPriceElem = screen.getByText(new RegExp(`${14000}`));

      expect(menuLengthElem).toBeInTheDocument();
      expect(totalPriceElem).toBeInTheDocument();
    });
  });
});
