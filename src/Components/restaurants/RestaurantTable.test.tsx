import { render, screen } from '@testing-library/react';

import TestProvider from '../../hooks/TestProvider';
import RestaurantTable from './RestaurantTable';
import restaurants from '../../../fixtures/restaurants';

describe('RestaurantTable', () => {
  it('render RestaturnatTable', () => {
    render(
      <TestProvider>
        <RestaurantTable restaurants={restaurants} />
      </TestProvider>,
    );

    expect(screen.getByText(/메가반점/));
    expect(screen.getByText(/짜장면/));
  });
});
