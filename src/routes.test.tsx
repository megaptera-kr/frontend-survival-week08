import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path:string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });

    render(<RouterProvider router={router} />);
  }

  context('when current page is "/"', () => {
    it('render the intro page', () => {
      renderRouter('/');
      screen.getByText('intro');
    });
  });
});
