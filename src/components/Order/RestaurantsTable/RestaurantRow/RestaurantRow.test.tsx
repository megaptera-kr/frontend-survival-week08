import { render, screen } from '@testing-library/react';
import RestaurantRow from '.';
import fixtures from '../../../../../fixtures';

const { restaurants } = fixtures;
const restaurant = restaurants[0];

function renderRestaurantRow() {
  render(<table><tbody><RestaurantRow restaurant={restaurant} /></tbody></table>);
}

const context = describe;
describe('RestaurantRow', () => {
  beforeEach(() => {
    renderRestaurantRow();
  });

  context('received restaurant props', () => {
    it('renders restaurans name', () => {
      const restaurantName = screen.getByText(new RegExp(restaurant.name));
      expect(restaurantName).toBeInTheDocument();
    });

    it('renders restaurants menu list', () => {
      const menuList = screen.getAllByRole('listitem');

      menuList.forEach((menuItem, index) => {
        expect(menuItem).toHaveTextContent(new RegExp(restaurant.menu[index].name));
      });
    });
  });
});
