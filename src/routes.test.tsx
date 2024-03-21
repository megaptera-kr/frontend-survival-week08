import { render, screen } from '@testing-library/react';

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

      screen.getByText('인트로 페이지');
    });
  });

  context('when the current path is “/order”', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText('주문 페이지');
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders the order complete page', () => {
      renderRouter('/order/complete');

      screen.getByText('주문결과 페이지');
    });
  });
});
