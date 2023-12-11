import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import routes from './routes';

import defaultTheme from './styles/defaultTheme';

const context = describe;

describe('routes', () => {
  const renderRouter = (path = '/') => {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render((
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    ));
  };

  context('When the current path is an "/"', () => {
    it('renders the entry page', () => {
      renderRouter('/');
      screen.getByText('원하시는 주문을 터치해주세요');
    });
  });

  context('When the current path is an "/order"', () => {
    it('renders the order page', () => {
      renderRouter('/order');
      screen.getByText('메가테라 푸드코트 키오스크');
    });
  });

  context('When the current path is an "/order/complete"', () => {
    it('renders the receipt page', async () => {
      renderRouter('/order/complete?orderId="RECEIPT_ID"');
      screen.getByText('메가테라 푸드코트 키오스크');
    });
  });
});
