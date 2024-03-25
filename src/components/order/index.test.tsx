/* eslint-disable comma-dangle */
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Order from './index';

describe('Order', () => {
  const orderId = 'ORDER_ID';
  const handleClickBack = jest.fn();

  it('renders result message', async () => {
    renderWithProviders(
      <Order orderId={orderId} onClickBack={handleClickBack} />
    );

    await waitFor(() => {
      screen.getByText(/완료되었습니다/);
    });
  });

  it('renders food list', async () => {
    renderWithProviders(
      <Order orderId={orderId} onClickBack={handleClickBack} />
    );

    await waitFor(() => {
      screen.getByText(/주문목록/);
      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  it('listens for back button click events ', () => {
    renderWithProviders(
      <Order orderId={orderId} onClickBack={handleClickBack} />
    );

    fireEvent.click(screen.getByText(/메인화면으로/));
    expect(handleClickBack).toBeCalled();
  });
});
