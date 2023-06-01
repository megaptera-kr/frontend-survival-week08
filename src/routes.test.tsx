import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

const context = describe;

describe('main', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>,
    );
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
