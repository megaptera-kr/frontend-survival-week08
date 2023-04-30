import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './router';

interface Location {
  pathname: string
  state: { id: number }
}

const context = describe;

describe('Router ', () => {
  const renderRouter = (paths: string[] | Location[]) => {
    const router = createMemoryRouter(routes, { initialEntries: paths });

    render((
      <RouterProvider router={router} />
    ));
  };

  context('URL 경로가 /인 경우', () => {
    it('메인 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/']);

      // Then
      screen.getByRole('heading', {
        name: /원하시는 주문을 터치해주세요/,
      });
    });
  });

  context('URL 경로가 /order인 경우', () => {
    it('location state의 id가 1에 해당하는 주문이 렌더링 되어야 합니다.', () => {
      // Given, When
      const location = { pathname: '/order', state: { id: 1 } };
      renderRouter([location]);

      // Then
      screen.getByText(/Order/);
    });
  });

  context('URL 경로가 /orderComplete인 경우', () => {
    it('결제 완료 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/orderComplete']);

      // Then
      screen.getByRole('heading', { name: /주문 완료, 서둘러 배달가겠습니다!/ });
    });
  });
});
