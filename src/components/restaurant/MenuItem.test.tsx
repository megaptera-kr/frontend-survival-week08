import { fireEvent, screen } from '@testing-library/react';

import useCartStore from '../../hooks/useCartStore';

import renderWithProviders from '../../testHelper';

import fixtures from '../../../fixtures';
import MenuItem from './MenuItem';

jest.mock('../../hooks/useCartStore');

const context = describe;

describe('MenuItem', () => {
  const { restaurants, menuItems } = fixtures;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('MenuItem', () => {
    it('render correctly', () => {
      const restaurant = restaurants[0];
      const menuItem = menuItems[0];
      renderWithProviders(
        <MenuItem restaurant={restaurant} menuItem={menuItem} />,
      );

      screen.getByText(menuItem.name);
      const price = `${menuItem.priceFormat()}원`;
      screen.findByText(price);
    });
  });

  context('메뉴 아이템을 클릭하면', () => {
    it('CartStore 의 addItem 함수가 호출된다.', () => {
      const [, cart] = useCartStore();

      const restaurant = restaurants[0];
      const menuItem = menuItems[0];
      renderWithProviders(
        <MenuItem restaurant={restaurant} menuItem={menuItem} />,
      );

      const item = screen.getByText(menuItem.name);
      fireEvent.click(item);

      expect(cart.addItem).toHaveBeenCalled();
    });
  });
});
