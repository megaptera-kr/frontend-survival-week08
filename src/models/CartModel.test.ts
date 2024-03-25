import CartModel from './CartModel';
import NotFoundError from '../exceptions/NotFoundError';
import fixtures from '../../fixtures';

const context = describe;

describe('CartModel', () => {
  let cart: CartModel;

  beforeEach(() => {
    cart = new CartModel();
  });

  context('When CartModel is created', () => {
    it('cartItems is [] and length 0', () => {
      expect(cart.cartItems).toHaveLength(0);
      expect(cart.cartItems).toEqual([]);
    });
  });

  // insertItem
  context('When upsertItem func excuted once normally', () => {
    it('menuItem length toHaveLength is 1', () => {
      const { restaurants, menuItems } = fixtures;
      const obj = {
        restaurant: restaurants[0],
        menuItem: menuItems[0],
        quantity: 1,
      };

      cart = cart.upsertItem({ ...obj });

      expect(cart.cartItems).toHaveLength(1);
    });
  });

  context('When upsertItem func excuted once normally', () => {
    it('quantity set as quantity', () => {
      const { restaurants, menuItems } = fixtures;
      const obj = {
        restaurant: restaurants[0],
        menuItem: menuItems[0],
        quantity: 2,
      };

      cart = cart.upsertItem({ ...obj });

      expect(cart.cartItems[0].quantity).toBe(2);
    });
  });

  context('When upsertItem func excuted twice with different menuId', () => {
    it('cartItems length toHaveLength is 2', () => {
      const { restaurants, menuItems } = fixtures;
      const obj = {
        restaurant: restaurants[0],
        menuItem: menuItems[0],
        quantity: 2,
      };

      cart = cart.upsertItem({ ...obj });
      cart = cart.upsertItem({ ...obj, menuItem: menuItems[1] });

      expect(cart.cartItems).toHaveLength(2);
    });
  });

  // updateItem
  context('When upsertItem func excuted twice with same menuId', () => {
    it('menuItem length toHaveLength 1', () => {
      const { restaurants, menuItems } = fixtures;
      const obj = {
        restaurant: restaurants[0],
        menuItem: menuItems[0],
        quantity: 1,
      };

      cart = cart.upsertItem({ ...obj });
      cart = cart.upsertItem({ ...obj, quantity: obj.quantity }); // twice

      expect(cart.cartItems).toHaveLength(1);
      expect(cart.cartItems[0].quantity).toBe(2);
    });
  });

  // deleteItem
  context('When deleteItem func excuted but cartItem not exists', () => {
    it('throw NotFoundError', () => {
      expect(() => cart.deleteItem({ menuId: 9999 })).toThrow(NotFoundError);
    });
  });

  context('When deleteItem func excuted cartItem exists', () => {
    it('the target cartItem removed', () => {
      const { restaurants, menuItems } = fixtures;
      const obj = {
        restaurant: restaurants[0],
        menuItem: menuItems[0],
        quantity: 1,
      };

      cart = cart.upsertItem({ ...obj });
      cart = cart.deleteItem({ menuId: obj.menuItem.id });

      expect(cart.cartItems).toHaveLength(0);
    });
  });

  // clearItems
  context('When deleteItem func excuted cartItem exists', () => {
    it('the target cartItem removed', () => {
      const { restaurants, menuItems } = fixtures;
      const obj = {
        restaurant: restaurants[0],
        menuItem: menuItems[0],
        quantity: 1,
      };

      cart = cart.upsertItem({ ...obj });
      cart = cart.clearItems();

      expect(cart.cartItems).toHaveLength(0);
    });
  });
});
