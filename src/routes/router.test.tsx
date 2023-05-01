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
    it('주문 목록 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/order']);

      // Then
      screen.getByPlaceholderText(/식당이름을 입력해주세요/);
    });
  });

  context('URL 경로가 /orderComplete인 경우', () => {
    it('결제 완료 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/orderComplete']);

      // Then
      screen.getByRole('heading', { name: /주문이 완료되었습니다!/ });
    });
  });
});
