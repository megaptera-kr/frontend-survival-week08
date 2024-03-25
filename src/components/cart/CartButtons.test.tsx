import { screen, fireEvent } from '@testing-library/react';

import { useNavigate } from 'react-router';
import useCartStore from '../../hooks/useCartStore';
import useCreateOrder from '../../hooks/useCreateOrder';

import renderWithProviders from '../../testHelper';

import CartButtons from './CartButtons';

const context = describe;

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));
jest.mock('../../hooks/useCartStore');
jest.mock('../../hooks/useCreateOrder');

describe('CartButtons', () => {
  const orderType = '매장주문';
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const rendering = () => {
    renderWithProviders(<CartButtons orderType={orderType} />);
  };

  context('CartButtons 가 렌더링되면', () => {
    it('취소, 주문하기 버튼이 보인다.', () => {
      rendering();

      screen.getByRole('button', { name: '취소' });
      screen.getByRole('button', { name: '주문하기' });
    });
  });

  context('취소 버튼을 클릭하면', () => {
    it('CartStore 의 clear, navigate 함수가 호출된다.', () => {
      (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate);
      const [, cartStroe] = useCartStore();

      rendering();

      const button = screen.getByRole('button', { name: '취소' });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
      expect(cartStroe.clear).toHaveBeenCalled();
    });
  });

  context('주문하기 버튼을 클릭하면', () => {
    it('handleCreateOrder 함수가 호출된다.', () => {
      (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate);
      const mockHandleCreateOrder = jest.fn();
      (useCreateOrder as jest.Mock).mockReturnValueOnce({
        handleCreateOrder: mockHandleCreateOrder,
      });
      rendering();

      const button = screen.getByRole('button', { name: '주문하기' });
      fireEvent.click(button);

      expect(mockHandleCreateOrder).toHaveBeenCalled();
    });
  });
});
