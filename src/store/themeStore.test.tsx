import ThemeStore from './themeStore';

const themeStore = new ThemeStore();

const context = describe;
describe('전역상태를 확인한다.', () => {
  context('themeStore를 생성한다.', () => {
    it('DarkMode의 초기값을 확인한다. DarkMode는 False이다.', () => {
      expect(themeStore.isDarkMode).toBeFalsy();
    });
  });
});
