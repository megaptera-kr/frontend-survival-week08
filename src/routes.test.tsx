import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';

const context = describe;

describe('render App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render((
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    ));
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요/);
    });

    context('when the current path is "/order"', () => {
      it('renders the About page', () => {
        renderRouter('/order');

        waitFor(() => {
          screen.getByText(/메가반점/);
          screen.getByText(/메리김밥/);
        });
      });
    });
  });
});
