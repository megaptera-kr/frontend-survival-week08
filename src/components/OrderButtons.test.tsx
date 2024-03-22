/* eslint-disable comma-dangle */
import { screen } from '@testing-library/react';

import OrderButtons from './OrderButtons';

import { renderWithProviders } from '../testHelper';

describe('OrderButtons', () => {
  it('renders button', () => {
    renderWithProviders(<OrderButtons />, { path: '/' });

    screen.getByText('매장 주문');
    screen.getByText('전체 포장');
  });
});
