import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

describe('routes', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  context('when routes to /', () => {
    it('초기화면이 렌더링 된다.', () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      screen.getByText('메가테라 푸드코트 키오스크');
      screen.getByText('원하시는 주문을 터치해주세요!');
      screen.queryByRole('button', { name: '매장주문' });
      screen.queryByRole('button', { name: '전체포장' });
    });
  });
});
