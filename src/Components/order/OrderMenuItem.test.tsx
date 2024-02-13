import { render, screen } from '@testing-library/react';

import TestProvider from '../../hooks/TestProvider';
import OrderMenuItem from './OrderMenuItem';

describe('OrderMenuIte', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };
  it('render OrderMenuItem', () => {
    render(
      <TestProvider>
        <OrderMenuItem food={food} />
      </TestProvider>,
    );
    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });
});
