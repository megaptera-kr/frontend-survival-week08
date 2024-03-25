import { waitFor, screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import FilterableRestaurants from './FilterableRestaurants';

describe('FilterableRestaurants', () => {
  it('renders Restaurants information', async () => {
    renderWithProviders(<FilterableRestaurants />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/고래/);
      screen.getByText(/짜장면/);
      screen.getByText(/8,000원/);
      screen.getByText(/3,000/);
    });
  });
});
