import { screen, fireEvent } from '@testing-library/react';

import useCartStore from '../../hooks/useCartStore';

import renderWithProviders from '../../testHelper';

import fixtures from '../../../fixtures';
import CartItem from './CartItem';

const context = describe;

jest.mock('../../hooks/useCartStore');

describe('', () => {
  const { cartItems } = fixtures;
  const cartItem = cartItems[0];

  const rendering = () => {
    renderWithProviders(<CartItem cartItem={cartItem} />);
  };

  context('렌더링', () => {
    it('카트 아이템의 정보가 화면에 표시된다.', () => {
      rendering();

      screen.getByText(cartItem.menuName);

      const quantity = `(${cartItem.quantity}개)`;
      screen.getByText(quantity);

      screen.getByRole('button', { name: 'X' });
    });
  });

  context('X 버튼을 클릭했을 때', () => {
    it('CartStore 의 removeItems 함수가 호출된다.', () => {
      const [, cartStore] = useCartStore();

      rendering();

      const button = screen.getByRole('button', { name: 'X' });
      fireEvent.click(button);

      expect(cartStore.removeItem).toHaveBeenCalled();
    });
  });
});
