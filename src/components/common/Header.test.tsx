import {
  render, screen,
} from '../../utils/test-utils';
import Header from './Header';

const context = describe;

describe('Header', () => {
  function renderHeader() {
    render(<Header />);
  }
  context('랜더링되면', () => {
    it('메가테라 푸드코트 키오스크, 로고, 테마 변경 버튼이 출력된다', () => {
      renderHeader();

      expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
      expect(screen.getByText('메가테라 푸드코트 키오스크')).toBeInTheDocument();
      expect(screen.getByTestId('switch-button')).toBeInTheDocument();
    });
  });
});
