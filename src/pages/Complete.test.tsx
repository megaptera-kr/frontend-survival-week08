import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '../utils/test/themeProviderWrapper';
import routes from '../routes';

const context = describe;

describe('Complete ', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [`${path}`] });
    render(<RouterProvider router={router} />);
  }
  it('render page', async () => {
    renderRouter('/order/complete');

    await waitFor(() => {
      // header check
      expect(screen.getByText(/완료되었습니다!/));
      expect(screen.getByText(/주문번호/));

      // list check
      expect(screen.getByText(/짜장면/));
      expect(screen.getByText(/짬뽕/));

      // footer check
      expect(screen.getByText(/총 가격/));
      expect(screen.getByText(/3,000원/));
      expect(screen.getByRole('button', { name: '메인화면으로 돌아가기' }));
    });
  });
  context('when click "메인화면으로 돌아가기" button', () => {
    it('click "메인화면으로 돌아가기" button"', async () => {
      renderRouter('/order/complete');

      await waitFor(async () => {
        const button = screen.getByRole('button', { name: '메인화면으로 돌아가기' });
        await userEvent.click(button);
        await waitFor(() => {
          // Text Check
          expect(screen.getByText(/원하시는 주문을 터치해주세요/)).toBeInTheDocument();

          // Button Check
          expect(screen.getByText('매장 주문')).toBeInTheDocument();
          expect(screen.getByText('전체 포장')).toBeInTheDocument();
        });
      });
    });
  });
});
