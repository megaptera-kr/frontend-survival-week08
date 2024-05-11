import { fireEvent, screen } from '@testing-library/react';
import CartList from '.';
import fixtures from '../../../../fixtures';
import Food from '../../../types/food';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const { menu } = fixtures.cart;

const state: {menu:Food[]} = {
  menu: [],
};

const removeCart = jest.fn();

jest.mock('../../../hooks/useCartStore', () => () => [state, { removeCart }]);

function renderCartList() {
  renderWithThemeProvider(<CartList menu={menu} />);
}
const context = describe;
describe('CartList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderCartList();
  });

  context('if it received cart props', () => {
    it('it renders cart list', () => {
      const cartList = screen.getAllByRole('listitem');

      cartList.forEach((food, index) => {
        expect(food).toHaveTextContent(menu[index].name);
      });
    });
  });

  context('if user click x button in listitem', () => {
    it('removeCart function will be called 1 time', () => {
      const firstXBtn = screen.getAllByRole('button')[0];
      fireEvent.click(firstXBtn);

      expect(removeCart).toHaveBeenCalledTimes(1);
    });
  });
});
