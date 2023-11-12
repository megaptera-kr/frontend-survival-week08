import {
  fireEvent, screen, waitFor,
} from '@testing-library/react';
import Order from './Order';
import { renderWithProviders } from '../testHelper';

describe('Order', () => {
  const orderId = 'ORDER_ID';
  const onClick = jest.fn();

  function renderOrder() {
    renderWithProviders((
      <Order
        orderId={orderId}
        onClick={onClick}
      />
    ));
  }

  it('renders result message', async () => {
    renderOrder();

    await waitFor(() => {
      screen.getByText(/완료되었습니다!/);
    });
  });

  it('renders order menu', async () => {
    renderOrder();

    await waitFor(() => {
      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  it('listens for back button click event', () => {
    renderOrder();

    fireEvent.click(screen.getByText('메인 화면으로 돌아가기'));

    expect(onClick).toBeCalled();
  });
});
