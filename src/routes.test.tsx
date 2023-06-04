import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

describe('routes', () => {

  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />)
  }

  context('when the current path is "/"', () => {
    it('renders the intro page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요/)
    })
  })

  context('when the current path is "/order "', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/주문하기/)
    })
  })

  context('when the current path is "/orderComplete"', () => {
    it('renders the order page', () => {
      renderRouter('/orderComplete');

      screen.getByText(/주문이 완료되었습니다!/)
    })
  })
});
