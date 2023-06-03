import { useDarkMode } from 'usehooks-ts';
import {
  render, renderHook, screen,
} from '../../utils/test-utils';
import Layout from './Layout';

const context = describe;

describe('Layout', () => {
  function renderLayout() {
    render(<Layout />);
  }
  context('기본테마일 때', () => {
    it('배경색은 linear-gradient(134.22deg, #F89E21 0.7%, #FF6400 65.66%)이다.', () => {
      renderLayout();

      const layout = screen.getByTestId('layout');

      expect(layout).toBeInTheDocument();
      expect(layout).toHaveStyle(`
        background: linear-gradient(134.22deg, #F89E21 0.7%, #FF6400 65.66%)
      `);
    });
  });
  context('다크테마일 때', () => {
    it('배경색은 #1E1E1E이다.', () => {
      const { result } = renderHook(() => useDarkMode());
      renderHook(() => result.current.toggle());
      renderLayout();

      const layout = screen.getByTestId('layout');

      expect(layout).toBeInTheDocument();
      expect(layout).toHaveStyle(`
        background: #1E1E1E
      `);
    });
  });
});
