import { render, screen } from '@testing-library/react';
import ResetButton from '.';

function renderResetButton() {
  render(<ResetButton />);
}

describe('ResetButton', () => {
  beforeEach(() => {
    renderResetButton();
  });

  it('renders 메인화면으로 돌아가기 button', () => {
    const btn = screen.getByText(/메인화면으로 돌아가기/);

    expect(btn).toBeInTheDocument();
  });
});
