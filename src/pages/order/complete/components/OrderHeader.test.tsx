import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../testHelper';
import OrderHeader from './OrderHeader';

const context = describe;

describe('OrderHeader', () => {
  context('with order ID', () => {
    it('renders result message', () => {
      renderWithProviders(<OrderHeader orderId="orderId" />);

      screen.getByText(/주문이 완료되었습니다!/);
      screen.getByText(/주문번호/);
    });
  });

  context('without order ID', () => {
    it('renders guide message', () => {
      renderWithProviders(<OrderHeader orderId="" />);

      screen.getByText(/주문을 진행해주세요!/);
    });
  });
});
