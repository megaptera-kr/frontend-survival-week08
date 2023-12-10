import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

const context = describe;

describe('', () => {
  const isDarkMode = false;
  const handleToggleTheme = jest.fn();

  context('메가테라 푸드코트 키오스크와 테마 변경 버튼이 있다.', () => {
    it('메가테라 푸트코트가 올바르게 나타난다.', () => {
      render(
        <Header
          isDarkMode={isDarkMode}
          handleToggleTheme={handleToggleTheme}
        />,
      );
      expect(screen.getAllByText(/메가테라 푸드코트/));

      fireEvent.click(screen.getByText('어둡게'));
      expect(handleToggleTheme).toBeCalled();

      fireEvent.click(screen.getByText('밝게'));
      expect(handleToggleTheme).toBeCalled();
    });
  });
});
