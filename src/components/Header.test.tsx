import { screen, fireEvent } from '@testing-library/react';

import Header from './Header';
import renderWithProviders from '../testHelper';

const context = describe;

describe('Header', () => {
  const setIsDarkMode = jest.fn();
  let isDarkMode = false;

  beforeEach(() => {
    jest.clearAllMocks();
    isDarkMode = true;
  });

  context('render', () => {
    it('헤더의 엘리먼트가 보여진다.', () => {
      renderWithProviders(
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />,
      );

      screen.getByText(/메가테라 푸드코트 키오스크/);
      screen.getByText(/밝게/);
      screen.getByText(/어둡게/);
    });
  });

  context('밝게 버튼을 클릭했을 때', () => {
    it('setIsDarkMode 함수가 호출된다.', () => {
      renderWithProviders(
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />,
      );

      const button = screen.getByText(/밝게/);
      fireEvent.click(button);
      expect(setIsDarkMode).toHaveBeenCalled();
    });
  });

  context('어둡게 버튼을 클릭했을 때', () => {
    it('setIsDarkMode 함수가 호출된다.', () => {
      renderWithProviders(
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />,
      );

      const button = screen.getByText(/어둡게/);
      fireEvent.click(button);
      expect(setIsDarkMode).toHaveBeenCalled();
    });
  });
});
