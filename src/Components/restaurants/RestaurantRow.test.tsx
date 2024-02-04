import { render, screen } from '@testing-library/react';

import TestProvider from '../../hooks/TestProvider';
import RestaurantRow from './RestaurantRow';

import foods from '../../../fixtures/foods';

describe('RestaurantRow', () => {
  const restaurant = {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '메가반점',
    menu: [...foods],
  };

  it('render RestaurantRow', () => {
    render(
      <TestProvider>
        <table>
          <tbody>
            <RestaurantRow restaurant={restaurant} />
          </tbody>
        </table>
        ,
      </TestProvider>,
    );
    expect(screen.getByText(/메가반점/));
    expect(screen.getByText(/짜장면/));
  });
});
