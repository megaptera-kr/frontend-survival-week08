import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';
import { initial } from 'lodash';
import App from './App';
import routes from './routes';

const context = describe;

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
  });

  beforeEach(() => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
  });

  context('open intro', () => {
    test('test', () => {
      screen.getByText(/메가테라/);
    });
  });
});
