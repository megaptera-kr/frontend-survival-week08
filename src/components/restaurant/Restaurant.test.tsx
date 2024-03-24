import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import fixtures from '../../../fixtures';

import Restaurant from './Restaurant';

import MenuItemModel from '../../models/MenuItemModel';

test('Restaurant', () => {
  const { restaurants } = fixtures;
  const restaurant = restaurants[0];

  renderWithProviders(<Restaurant restaurant={restaurant} />);

  screen.getByText(restaurant.name);
  restaurant.menu.forEach((menuItem: MenuItemModel) => {
    screen.getByText(menuItem.name);
  });
});
