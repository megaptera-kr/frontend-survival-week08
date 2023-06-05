import { useDarkMode } from 'usehooks-ts';
import {
  render, renderHook, screen,
} from '../../utils/test-utils';
import ButtonText from './ButtonText';

const context = describe;

describe('ButtonText', () => {
  function renderButtonText(name: string, isActive: boolean) {
    render(<ButtonText name={name} isActive={isActive} />);
  }
  context('name, isActive를 전달하고, 기본테마일 때', () => {
    it('"밝게" 텍스트가 들어있는 버튼 스타일로 렌더링 된다. ', () => {
      const { result } = renderHook(() => useDarkMode());
      const { isDarkMode } = result.current;
      const name = '밝게';
      renderButtonText(name, !isDarkMode);

      const element = screen.getByText(name);
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle(`
        background: #FFF
      `);
    });
  });
  context('name, isActive를 전달하고, 다크테마일 때', () => {
    it('"어둡게" 텍스트가 들어있는 버튼 스타일로 렌더링 된다. ', () => {
      const { result } = renderHook(() => useDarkMode());
      renderHook(() => result.current.toggle());
      const { isDarkMode } = result.current;
      const name = '어둡게';
      renderButtonText(name, isDarkMode);

      const element = screen.getByText(name);
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle(`
        background: #1E1E1E
      `);
    });
  });
});
