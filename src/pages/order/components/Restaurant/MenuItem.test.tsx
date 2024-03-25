import { screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import { renderWithProviders } from '../../../../testHelper';

describe('MenuItem', () => {
  const menu = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders food information', () => {
    renderWithProviders((
      <MenuItem
        menu={menu}
      />
    ));

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });
});
