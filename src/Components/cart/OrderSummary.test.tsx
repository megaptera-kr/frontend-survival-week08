import { render, screen } from '@testing-library/react';

import OrderSummary from './OrderSummary';

import foods from '../../../fixtures/foods';
import TestProvider from '../../hooks/TestProvider';

describe('OrderSummary', () => {
  // const selectedMenu = foods;
  // const totalPrice = foods.reduce((acc, food) => acc + food.price, 0);
  it('displays the correct count and total price', () => {
    render(
      <TestProvider>
        <OrderSummary selectedMenu={foods} />
      </TestProvider>,
    );
    expect(screen.getByText(/주문내역/));
    expect(
      screen.getByText(/총 결제 예상금액/),
    );
  });
});
