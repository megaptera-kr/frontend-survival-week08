import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../../testHelper';

import RestaurantRow from './RestaurantRow';

import fixtures from '../../../../../fixtures';

describe('RestaurantRow', () => {
  it('renders restaurant information', () => {
    renderWithProviders((
      <table>
        <tbody>
          <RestaurantRow restaurant={{ ...fixtures.restaurants[0] }} />
        </tbody>
      </table>
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
  });
});
