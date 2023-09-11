import { useDarkMode } from 'usehooks-ts';
import {
  render, renderHook, screen,
} from '../../../utils/test/themeProviderWrapper';
import Header from './Header';

describe('Header', () => {
  it('render show title', () => {
    const { result } = renderHook(() => useDarkMode());
    const { isDarkMode, toggle } = result.current;
    render(
      <Header
        isDarkMode={isDarkMode}
        toggle={toggle}
      />,
    );
    expect(screen.getByText(/메가테라 푸드코트/)).toBeInTheDocument();
  });
});
