import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import RestaurantItem from './RestaurantItem';

import restaurants from '../../../fixtures/restaurants';

describe('RestaurantItem', () => {
  it('render restaurant information', () => {
    renderWithProviders(<RestaurantItem restaurant={restaurants[0]} />, {
      path: '/order',
    });

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
    screen.getByText(/8,000/);
    screen.getByText(/5,000/);
  });
});
