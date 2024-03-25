import { screen } from '@testing-library/react';

import { useLocation, useNavigate } from 'react-router';
import useCartStore from '../hooks/useCartStore';

import OrderPage from './OrderPage';
import renderWithProviders from '../testHelper';

const context = describe;

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));
jest.mock('../hooks/useCartStore');

describe('OrderPage', () => {
  let mockUseLocation = {
    state: {
      orderType: '',
    },
  };
  const mockUseNavigate = jest.fn();

  beforeEach(() => {
    mockUseLocation = {
      state: {
        orderType: '매장주문',
      },
    };

    jest.clearAllMocks();
  });

  context('orderType 이 "매장 주문" 또는 "전체 포장"이 아닌 경우', () => {
    it('navigate 함수가 / 값으로 호출된다.', () => {
      mockUseLocation.state.orderType = '';
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);

      renderWithProviders(<OrderPage />);

      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
  });

  context('orderType 이 "매장 주문" 이거나 "전체 포장"인 경우', () => {
    it('navigate 함수가 호출되지 않고, cartStore 의 setOrderKind 함수가 호출된다.', () => {
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);

      const [, cartStore] = useCartStore();

      renderWithProviders(<OrderPage />);
      expect(cartStore.setOrderType).toHaveBeenCalled();
    });
  });

  context('orderType 값이 정상적인 경우 "매장주문" 인 경우', () => {
    it('[매장주문] 이 화면에 표시된다.', () => {
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);
      renderWithProviders(<OrderPage />);

      screen.getByText('[매장주문]');
    });
  });
});
