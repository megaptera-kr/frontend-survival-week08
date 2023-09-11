import { screen } from '@testing-library/react';

import renderWithProviders from '../../testHelper';

import Menu from '../../components/restaurants/Menu';

import fixtures from '../../../fixtures';

describe('<Menu />', () => {
  const { foods } = fixtures;

  it('render food menu', () => {
    renderWithProviders(<Menu menu={foods} />);

    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });
});
