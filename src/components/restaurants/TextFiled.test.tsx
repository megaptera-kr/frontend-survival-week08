import { container } from 'tsyringe';
import {
  fireEvent, render, screen, waitFor,
} from '../../utils/test-utils';
import TextFiled from './TextFiled';

const context = describe;

describe('TextFiled', () => {
  beforeEach(() => {
    container.clearInstances();
  });
  function renderTextFiled() {
    render(<TextFiled placeholder="식당이름을 입력해주세요" />);
  }
  context('"식당이름을 입력해주세요"을 전달하면', () => {
    it('인풋이 랜더링 된다.', () => {
      renderTextFiled();

      expect(screen.getByPlaceholderText('식당이름을 입력해주세요')).toBeInTheDocument();
      expect(screen.getByLabelText('검색')).toBeInTheDocument();
    });
  });

  context('사용자가 "메가"를 입력하면', () => {
    it('input value가 "메가"가 된다. ', async () => {
      renderTextFiled();
      const input = screen.getByLabelText('검색');

      fireEvent.change(input, { target: { value: '메가' } });

      await waitFor(() => {
        expect(screen.getByDisplayValue('메가')).toBeInTheDocument();
      });
    });
  });
});
