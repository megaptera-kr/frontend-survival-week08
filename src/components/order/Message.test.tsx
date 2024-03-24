import { screen } from '@testing-library/react';

import Message from './Message';

import order from '../../../fixtures/order';
import { renderWithProviders } from '../../testHelper';
import Receipt from '../../types/Receipt';

const context = describe;

describe('Message', () => {
  context('with order ID', () => {
    it('renders result message', () => {
      renderWithProviders(<Message order={order} />);

      screen.getByText(/완료되었습니다./);
      screen.getByText(/주문번호/);
    });
  });

  context('without order ID', () => {
    const emptyOrder = {} as Receipt;
    it('renders guide message', () => {
      renderWithProviders(<Message order={emptyOrder} />);

      screen.getByText(/주문을 진행해주세요/);
    });
  });
});
