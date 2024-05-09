import { fireEvent, render, screen } from '@testing-library/react';
import ResetButton from '.';

const goToIntro = jest.fn();

function renderResetButton() {
  render(<ResetButton goToIntro={goToIntro} />);
}

const context = describe;
describe('ResetButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderResetButton();
  });

  it('it renders 메인화면으로 돌아가기 button', () => {
    const btn = screen.getByText(/메인화면으로 돌아가기/);

    expect(btn).toBeInTheDocument();
  });

  context('if user click button', () => {
    it('goToIntro function will be called', () => {
      const btn = screen.getByText(/메인화면으로 돌아가기/);
      fireEvent.click(btn);

      expect(goToIntro).toHaveBeenCalled();
    });
  });
});
