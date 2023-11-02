import { render, screen } from '@testing-library/react';
import Message from './Message';
import fixtures from '../../fixtures';
import Order from '../types/Order';

const context = describe;

describe('Message', () => {
  context('renders Message with order', () => {
    const { order } = fixtures;

    it('renders Message', () => {
      render((
        <Message order={order} />
      ));
      screen.getByText(/완료되었습니다!/);
      screen.getByText(/주문번호/);
    });
  });

  context('renders Message witout order', () => {
    const order = {} as Order;

    it('renders Mesage', () => {
      render((
        <Message order={order} />
      ));
      screen.getByText(/주문을 진행해주세요!/);
    });
  });
});
