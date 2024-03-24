import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import fixtures from '../../../fixtures';

import Menu from './Menu';
import MenuItemModel from '../../models/MenuItemModel';

test('Menu', () => {
  const { menuItems, restaurants } = fixtures;
  const restaurant = restaurants[0];

  renderWithProviders(<Menu menu={menuItems} restaurant={restaurant} />);

  menuItems.forEach((item: MenuItemModel) => {
    screen.queryByText(item.name);
    screen.queryByText(item.priceFormat());
  });
});
