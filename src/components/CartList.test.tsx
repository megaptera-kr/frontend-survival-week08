import {
  render, screen, act, renderHook,
} from '../utils/test/themeProviderWrapper';
import useCartStore from '../hooks/useCartStore';
import CartList from './CartList';

const context = describe;

describe('CartList ', () => {
  const { result } = renderHook(() => useCartStore());
  const cartStore = result.current[1];
  function renderCart() {
    render(<CartList />);
  }

  beforeEach(() => {
    act(() => {
      cartStore.reset();
    });
  });

  context('when add cart menu', () => {
    it('add item test', async () => {
      renderCart();

      act(() => {
        cartStore.addItem({
          id: '1', name: '짜장면', price: 1_000, image: 'test.png',
        });
      });

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'X' })).toBeInTheDocument();
    });
  });

  context('when remove cart menu', () => {
    it('remove add after item"', async () => {
      renderCart();
      act(() => {
        cartStore.addItem({
          id: '1', name: '짜장면', price: 1_000, image: 'test.png',
        });
      });

      const text = screen.getByText(/짜장면/);

      expect(text).toBeInTheDocument();

      act(() => {
        cartStore.removeIndexItem(0);
      });

      expect(text).not.toBeInTheDocument();
    });
  });
});
