import { render, screen } from '@testing-library/react';
import OrderButton from '.';

describe('OrderButton', () => {
  beforeEach(() => {
    render(<OrderButton />);
  });

  it('renders 주문하기, 취소 button', () => {
    const cancelBtn = screen.getByText(/취소/);
    const orderBtn = screen.getByText(/주문 하기/);

    expect(cancelBtn).toBeInTheDocument();
    expect(orderBtn).toBeInTheDocument();
  });
});
