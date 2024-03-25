import { screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import fixtures from '../../../../../fixtures';

import { renderWithProviders } from '../../../../testHelper';

describe('RestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders restaurants', () => {
    renderWithProviders(<RestaurantTable restaurants={restaurants} />);

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });
});
