import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import RestaurantRow from '../../components/restaurants/RestaurantRow';

import fixtures from '../../../fixtures';

describe('<RestaurantRow />', () => {
  const { restaurants } = fixtures;
  const restaurant = restaurants[0];

  it('renders restaurant', () => {
    renderWithProviders((
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
  });
});
