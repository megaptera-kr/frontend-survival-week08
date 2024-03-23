import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Summary from './Summary';

import foods from '../../../fixtures/foods';

describe('Summary', () => {
  function renderCartItem() {
    renderWithProviders(
      <Summary menu={foods} />,
      // eslint-disable-next-line comma-dangle
      { path: '/order' }
    );
  }

  it('renders total selected menu count', () => {
    renderCartItem();

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
    expect(foods.length).toBe(2);
  });
});
