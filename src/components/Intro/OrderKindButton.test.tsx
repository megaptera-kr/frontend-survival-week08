import { screen, fireEvent } from '@testing-library/react';

import { useNavigate } from 'react-router';

import OrderKindButton from './OrderKindButton';
import renderWithProviders from '../../testHelper';

const context = describe;

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

describe('RootButton', () => {
  const path = '/order';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('render', () => {
    it('"매장 주문" 버튼이 보여진다.', () => {
      renderWithProviders(
        <OrderKindButton src='test' alt='test' text='매장주문' />,
      );

      screen.getByText(/매장주문/);
    });

    it('"포장 주문" 버튼이 보여진다.', () => {
      renderWithProviders(
        <OrderKindButton src='test' alt='test' text='포장주문' />,
      );

      screen.getByText(/포장주문/);
    });
  });

  context('button clicked', () => {
    it('클릭한 버튼의 path 값으로 useNavigate 가 호출된다.', () => {
      const mockNavigate = jest.fn();
      (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

      renderWithProviders(
        <OrderKindButton src='test' alt='test' text='매장주문' />,
      );

      const button = screen.getByText(/매장주문/);
      fireEvent.click(button);
      expect(mockNavigate).toHaveBeenCalledWith(`${path}`, {
        state: { orderType: '매장주문' },
      });
    });
  });
});
