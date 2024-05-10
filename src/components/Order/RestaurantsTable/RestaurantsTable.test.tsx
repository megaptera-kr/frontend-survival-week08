import { screen } from '@testing-library/react';
import RestaurantsTable from '.';
import fixtures from '../../../../fixtures';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const { restaurants } = fixtures;

const context = describe;
describe('RestaurantsTable', () => {
  beforeEach(() => {
    renderWithThemeProvider(<RestaurantsTable restaurants={restaurants} />);
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
