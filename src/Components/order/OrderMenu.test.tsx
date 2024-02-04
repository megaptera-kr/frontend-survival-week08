import { render, screen } from '@testing-library/react';

import receipt from '../../../fixtures/receipt';
import OrderMenu from './OrderMenu';

import TestProvider from '../../hooks/TestProvider';

describe('OrderMenu', () => {
  it('render title', () => {
    render(
      <TestProvider>
        <OrderMenu order={receipt} />
      </TestProvider>,
    );
    screen.getByText(/주문목록/);
  });

  it('renders list', () => {
    render(
      <TestProvider>
        <OrderMenu order={receipt} />
      </TestProvider>,
    );

    const listItem = screen.getAllByRole('listitem');
    expect(listItem).toHaveLength(receipt.menu.length);

    receipt.menu.forEach((food) => {
      expect(screen.getByText(new RegExp(`${food.price.toLocaleString()}원`)));
    });
  });
});
