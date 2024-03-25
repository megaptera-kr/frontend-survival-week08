import { screen, fireEvent } from '@testing-library/react';

import { useLocation, useNavigate } from 'react-router';

import renderWithProviders from '../testHelper';
import OrderCompletePage from './OrderCompletePage';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));
jest.mock('../hooks/useReadOrder');

const context = describe;

describe('OrderCompletePage', () => {
  let mockUseLocation = {
    state: {
      orderId: '',
    },
  };
  const mockUseNavigate = jest.fn();

  beforeEach(() => {
    mockUseLocation = {
      state: {
        orderId: '매장주문',
      },
    };

    jest.clearAllMocks();
  });

  context('주문 아이디가 없는 경우', () => {
    it('"주문 ID를 찾을 수 없습니다" 문구가 표시된다', () => {
      mockUseLocation.state.orderId = '';
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      renderWithProviders(<OrderCompletePage />);

      screen.getByText('주문 ID를 찾을 수 없습니다');
    });
  });

  context('주문 아이디가 있는 경우', () => {
    it('"주문 아이디가 표시된다.', () => {
      mockUseLocation.state.orderId = '123';
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      renderWithProviders(<OrderCompletePage />);

      screen.queryByText('주문목록');
      screen.queryByText('메인화면으로 돌아가기');
      screen.queryByText(mockUseLocation.state.orderId);
    });
  });

  context('메인화면으로 돌아가기 버튼을 클릭했을 때', () => {
    it('navigate 함수가 실행된다.', () => {
      mockUseLocation.state.orderId = '123';
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValueOnce(mockUseNavigate);
      renderWithProviders(<OrderCompletePage />);

      const button = screen.getByRole('button', {
        name: '메인화면으로 돌아가기',
      });

      fireEvent.click(button);
      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
