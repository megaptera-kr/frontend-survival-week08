import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantRow from '.';
import fixtures from '../../../../../fixtures';
import Food from '../../../../types/food';

const { restaurants } = fixtures;
const restaurant = restaurants[0];

const state: {menu:Food[]} = {
  menu: [],
};
const addCart = jest.fn();

jest.mock(
  '../../../../hooks/useCartStore',
  () => () => [state, { addCart }],
);

function renderRestaurantRow() {
  jest.clearAllMocks();
  render(
    <table>
      <tbody><RestaurantRow restaurant={restaurant} /></tbody>
    </table>,
  );
}

const context = describe;
describe('RestaurantRow', () => {
  beforeEach(() => {
    renderRestaurantRow();
  });

  context('if it received restaurant props', () => {
    it('renders restaurans name', () => {
      const restaurantName = screen.getByText(new RegExp(restaurant.name));
      expect(restaurantName).toBeInTheDocument();
    });

    it('renders restaurants menu list button', () => {
      const menuList = screen.getAllByRole('button');

      menuList.forEach((menuItem, index) => {
        expect(menuItem).toHaveTextContent(
          new RegExp(restaurant.menu[index].name),
        );
      });
    });
  });

  context('if user click food', () => {
    it('addCart function will be called 1 time', () => {
      const firstFood = screen.getAllByRole('button')[0];
      fireEvent.click(firstFood);

      expect(addCart).toHaveBeenCalledTimes(1);
    });
  });
});
