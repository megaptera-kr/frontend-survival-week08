import { render, screen } from '@testing-library/react';
import CartList from '.';
import fixtures from '../../../../fixtures';

const { menu } = fixtures.cart;

function renderCartList() {
  render(<CartList menu={menu} />);
}
const context = describe;
describe('CartList', () => {
  beforeEach(() => {
    renderCartList();
  });

  context('if it received cart props', () => {
    it('renders cart list', () => {
      const cartList = screen.getAllByRole('listitem');

      cartList.forEach((food, index) => {
        expect(food).toHaveTextContent(menu[index].name);
      });
    });
  });
});
