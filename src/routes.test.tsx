import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('main', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }
  context('현재 경로가 "/"일 때', () => {
    it('"매장 주문", "포장 주문" 버튼 두개가 렌더링 된다.', () => {
      renderRouter('/');

      expect(screen.getByText('HomePage')).toBeInTheDocument();
    });
  });
  context('현재 경로가 "/order"일 때', () => {
    it('"매장 주문", "포장 주문" 버튼 두개가 렌더링 된다.', () => {
      renderRouter('/order');

      expect(screen.getByText('OrderPage')).toBeInTheDocument();
    });
  });
  context('현재 경로가 "/order/complete?orderId=12345678910"일 때', () => {
    it('"매장 주문", "포장 주문" 버튼 두개가 렌더링 된다.', () => {
      renderRouter('/order/complete?orderId=12345678910');

      expect(screen.getByText('OrderCompletePage')).toBeInTheDocument();
    });
  });
});
