import { useDarkMode } from 'usehooks-ts';
import userEvent from '@testing-library/user-event';
import {
  render, renderHook, screen, waitFor,
} from '../../utils/test-utils';
import SwitchButton from './SwitchButton';

const context = describe;

describe('SwitchButton', () => {
  const { result } = renderHook(() => useDarkMode());
  const { isDarkMode } = result.current;
  function renderSwitchButton() {
    render(<SwitchButton isDarkMode={isDarkMode} toggle={result.current.toggle} />);
  }
  context('isDarkMode, toggle을 전달하고, 기본테마일 때', () => {
    it('"밝게", "어둡게" 테마를 변경할 수 있는 배경색이 #FFA454인 버튼이 렌더링 된다.', () => {
      renderSwitchButton();

      expect(screen.getByText('밝게')).toBeInTheDocument();
      expect(screen.getByText('어둡게')).toBeInTheDocument();

      const switchButton = screen.getByTestId('switch-button');
      expect(switchButton).toBeInTheDocument();
      expect(switchButton).toHaveStyle(`
        background: #FFA454
      `);
    });
  });
  context('사용자가 버튼을 클릭하면', () => {
    it('다크테마로 변경되고, 배경색이 #3A3A3A인 버튼이 렌더링 된다.', async () => {
      renderSwitchButton();

      expect(screen.getByText('밝게')).toBeInTheDocument();
      expect(screen.getByText('어둡게')).toBeInTheDocument();

      const switchButton = screen.getByTestId('switch-button');
      expect(switchButton).toBeInTheDocument();

      userEvent.click(switchButton);

      await waitFor(() => {
        expect(switchButton).toHaveStyle(`
          background: #3A3A3A
        `);
      });
    });
  });
});
