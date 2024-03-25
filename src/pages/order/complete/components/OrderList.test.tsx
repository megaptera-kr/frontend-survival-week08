import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../../../testHelper';

import OrderList from './OrderList';

import fixtures from '../../../../../fixtures';

describe('OrderList', () => {
  const { order } = fixtures;

  it('renders order menu', async () => {
    renderWithProviders((
      <OrderList
        menus={order.menu}
      />
    ));

    await waitFor(() => {
      screen.getByText(/짜장면/);
      screen.getByText(/제육김밥/);
    });
  });
});
