import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

function renderRouter(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
}

describe('routes', () => {
  context('when then current path is "/"', () => {
    it('render the home page', () => {
      renderRouter('/');
      expect(screen.getByText(/매장 주문/)).toBeInTheDocument();
    });
  });

  context('when then current path is "/order"', () => {
    it('render the order page', () => {
      renderRouter('/order');
      expect(screen.getByText(/주문내역/));
    });
  });
});
