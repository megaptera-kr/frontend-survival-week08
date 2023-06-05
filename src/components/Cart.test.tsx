import {
  render, screen, act, renderHook,
} from '../utils/test/themeProviderWrapper';
import Cart from './Cart';
import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('Cart ', () => {
  const handleCancel = jest.fn();
  const handleOrderSubmit = jest.fn();
  const { result } = renderHook(() => useCartStore());
  const cartStore = result.current[1];
  function renderCart() {
    render(
      <Cart
        handleCancel={handleCancel}
        handleOrderSubmit={handleOrderSubmit}
      />,
    );
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

      expect(screen.getByText(/1개/)).toBeInTheDocument();
      expect(screen.getByText(/총 결제 예상금액/)).toBeInTheDocument();
      expect(screen.getByText(/1,000원/)).toBeInTheDocument();
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
