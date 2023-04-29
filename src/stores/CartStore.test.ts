import CartStore from './CartStore';

import { foods } from '../../fixtures';

const context = describe;

describe('CartStore', () => {
  let cartStore: CartStore;

  beforeEach(() => {
    cartStore = new CartStore();
  });

  it('is created empty', () => {
    expect(cartStore.size()).toBe(0);
  });

  context('with addCartItem', () => {
    it('food is added', () => {
      const food = foods[0];

      cartStore.addCartItem(food);

      expect(cartStore.size()).toBe(1);
      expect(cartStore.getTotalPrice()).toBe(food.price);
    });
  });

  context('with removeCartItem', () => {
    it('size is decreased', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      const { id } = cartStore.cart[0];
      cartStore.removeCartItem(id);

      expect(cartStore.size()).toBe(1);
    });
  });

  context('with clearCart', () => {
    it('cart is empty', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      cartStore.clear();

      expect(cartStore.size()).toBe(0);
    });
  });

  context('with getTotalPrice', () => {
    it('return thue sum of the price of cart items', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      const totalPrice = cartStore.getTotalPrice();

      expect(totalPrice).toBe(24000);
    });

    it('return "0" when cart is empty', () => {
      const totalPrice = cartStore.getTotalPrice();

      expect(totalPrice).toBe(0);
    });
  });
});
