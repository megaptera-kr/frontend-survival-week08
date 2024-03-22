/* eslint-disable comma-dangle */
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../testHelper';

import OrderButton from './OrderButton';

describe('OrderButton', () => {
  const handleOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders button', () => {
    renderWithProviders(
      <OrderButton text="매장 주문" src="test.png" onClick={handleOnClick} />,
      { path: '/' }
    );

    screen.getByText('매장 주문');
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/test.png');
  });

  it('listens for click events', () => {
    renderWithProviders(
      <OrderButton text="매장 주문" src="test.png" onClick={handleOnClick} />,
      { path: '/' }
    );

    fireEvent.click(screen.getByText('매장 주문'));
    expect(handleOnClick).toBeCalled();
  });
});
