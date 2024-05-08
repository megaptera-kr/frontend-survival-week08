import { render, screen } from '@testing-library/react';
import RestaurantsTable from '.';
import fixtures from '../../../../fixtures';

const { restaurants } = fixtures;

function renderRestaurantsTable() {
  render(<RestaurantsTable restaurants={restaurants} />);
}

const context = describe;
describe('RestaurantsTable', () => {
  beforeEach(() => {
    renderRestaurantsTable();
  });

  context('received restaurants props', () => {
    it('renders restaurant rows', () => {
      const restaurantRows = screen.getAllByRole('row');
      expect(restaurantRows).toHaveLength(restaurants.length);
    });

    it('renders restaurant menu', () => {
      const menuItem = screen.getByText(/짜장면/);
      expect(menuItem).toBeInTheDocument();
    });
  });
});
