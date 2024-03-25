import { render, screen, waitFor } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the intro page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을/);
      screen.getByText(/매장 주문/);
      screen.getByText(/전체 포장/);
    });
  });

  context('when the current path is “/order”', () => {
    it('renders the order page', async () => {
      renderRouter('/order');

      await waitFor(() => {
        screen.getByText(/메가반점/);
        screen.getByText(/짬뽕/);
        screen.getByPlaceholderText(/식당이름을 입력해주세요./);
      });
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders the order complete page', async () => {
      renderRouter('/order/complete?orderId="ID"');

      await waitFor(() => {
        screen.getByText(/완료되었습니다./);
        screen.getByText(/메인화면으로/);
      });
    });
  });
});
