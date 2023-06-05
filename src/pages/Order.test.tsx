import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {
  act, render, renderHook, screen, waitFor,
} from '../utils/test/themeProviderWrapper';
import routes from '../routes';
import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('Order ', () => {
  const { result } = renderHook(() => useCartStore());
  const cartStore = result.current[1];
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [`${path}`] });
    render(<RouterProvider router={router} />);
  }

  it('when render component', async () => {
    renderRouter('/order');

    await waitFor(() => {
      // Search Filter Field
      expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/식당 이름을 입력해주세요/)).toBeInTheDocument();

      // Category Filter Field
      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();

      // Menu Field
      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
    });
  });

  context('when filter text restaurants', () => {
    it('write filterText "김"', async () => {
      renderRouter('/order');

      await waitFor(async () => {
        const user = userEvent.setup();
        await user.click(screen.getByPlaceholderText(/식당 이름을 입력해주세요/));
        await user.keyboard('김');
      });
    });
  });

  context('when filter category restaurants', () => {
    it('click category by "중식"', async () => {
      renderRouter('/order');

      await waitFor(() => {
        const button = screen.getByRole('button', { name: '중식' });
        userEvent.click(button);

        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      });
    });
  });

  context('when add cart menu', () => {
    it('click 짜장면, 짬뽕 menu"', async () => {
      renderRouter('/order');

      await waitFor(async () => {
        await act(() => {
          cartStore.reset();
        });
        await userEvent.click(screen.getByTestId('짜장면'));
        await userEvent.click(screen.getByTestId('짬뽕'));

        expect(screen.getByTestId('cart-짜장면')).toBeInTheDocument();
        expect(screen.getByTestId('cart-짬뽕')).toBeInTheDocument();

        expect(screen.getByText(/2개/)).toBeInTheDocument();
        expect(screen.getByText(/16,000/)).toBeInTheDocument();
      });
    });
  });

  context('when remove cart menu', () => {
    it('remove 짜장면, 짬뽕 menu"', async () => {
      renderRouter('/order');

      await waitFor(async () => {
        await act(() => {
          cartStore.reset();
        });

        await userEvent.click(screen.getByTestId('짜장면'));
        await userEvent.click(screen.getByTestId('짬뽕'));

        expect(screen.getByTestId('cart-짜장면')).toBeInTheDocument();
        expect(screen.getByTestId('cart-짬뽕')).toBeInTheDocument();

        await userEvent.click(screen.getAllByRole('button', { name: 'X' })[1]);
        await userEvent.click(screen.getAllByRole('button', { name: 'X' })[0]);

        expect(screen.getByText(/0개/)).toBeInTheDocument();
      });
    });
  });

  context('when click 취소 button ', () => {
    it('click cancel button"', async () => {
      renderRouter('/order');

      await waitFor(async () => {
        await act(() => {
          cartStore.reset();
        });
        await userEvent.click(screen.getByTestId('짜장면'));
        await userEvent.click(screen.getByTestId('짬뽕'));

        expect(cartStore.cart).toHaveLength(2);

        await userEvent.click(screen.getByRole('button', { name: '취소' }));

        expect(screen.getByText(/전체 포장/)).toBeInTheDocument();
        expect(cartStore.cart).toHaveLength(0);
      });
    });
  });
});
