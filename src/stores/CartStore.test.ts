import { container } from 'tsyringe';

import CartStore from './CartStore';

import RestaurantModel from '../models/RestaurantModel';
import MenuItemModel from '../models/MenuItemModel';
import NotFoundError from '../exceptions/NotFoundError';

const context = describe;

describe('CartStore', () => {
  let cartStore: CartStore;
  const restaurantObj = {
    id: 1,
    category: '중식',
    name: '메가반점',
    menu: [
      { id: 1, name: '짜장면', price: 8000, image: '/image/test.png' },
      { id: 2, name: '짬뽕', price: 8000, image: '/image/test.png' },
      { id: 3, name: '차돌짬뽕', price: 9000, image: '/image/test.png' },
      { id: 4, name: '탕수육', price: 14000, image: '/image/test.png' },
    ],
  };
  const menuItemObj = {
    id: 1,
    name: '짜장면',
    price: 8000,
    image: 'image/test.png',
  };
  let restaurant: RestaurantModel;
  let menuItem: MenuItemModel;

  beforeEach(() => {
    cartStore = container.resolve(CartStore);
    restaurant = new RestaurantModel({ ...restaurantObj });
    menuItem = new MenuItemModel({ ...menuItemObj });
    container.clearInstances();
  });

  context('When CartStore instance created', () => {
    it('store instance is not null and cartItem has length 0', () => {
      expect(cartStore).not.toBeNull();
      expect(cartStore.snapshot.cartItems).toHaveLength(0);
    });
  });

  context('When CartStore addItem excuted', () => {
    it('cartItem length 1', () => {
      cartStore.addItem({ restaurant, menuItem, quantity: 1 });
      const { cartItems } = cartStore.snapshot;

      expect(cartItems).toHaveLength(1);
    });
  });

  context('When CartStore addItem excuted twice with same menuId', () => {
    it('cartItem length 1 and quantity 2', () => {
      cartStore.addItem({ restaurant, menuItem, quantity: 1 });
      cartStore.addItem({ restaurant, menuItem, quantity: 1 });

      const { cartItems } = cartStore.snapshot;

      expect(cartItems).toHaveLength(1);
      expect(cartItems[0].quantity).toBe(2);
    });
  });

  context('When CartStore addItem excuted twice with different menuId', () => {
    it('cartItem length 1 and quantity 2', () => {
      cartStore.addItem({ restaurant, menuItem, quantity: 1 });

      menuItemObj.id = 2;
      menuItem = new MenuItemModel({ ...menuItemObj });
      cartStore.addItem({ restaurant, menuItem, quantity: 1 });

      const { cartItems } = cartStore.snapshot;

      expect(cartItems).toHaveLength(2);
    });
  });

  context('When CartStore removeItem excuted with not exists menuId', () => {
    it('throw NotFoundError', () => {
      expect(() => cartStore.removeItem({ menuId: 9999 })).toThrow(
        NotFoundError,
      );
    });
  });

  context('When CartStore clear excuted with not exists menuId', () => {
    it('not throw Error', () => {
      expect(() => cartStore.clear()).not.toThrow(NotFoundError);
    });
  });

  context('When CartStore clear excuted', () => {
    it('not throw Error', () => {
      cartStore.addItem({ restaurant, menuItem, quantity: 1 });
      cartStore.clear();

      const { cartItems } = cartStore.snapshot;
      expect(cartItems).toHaveLength(0);
    });
  });
});
