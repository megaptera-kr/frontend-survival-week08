import fixtures from '../../../fixtures';

export const mockCartItems = { cartItems: fixtures.cartItems };

const cartStore = {
  setOrderType: jest.fn(),
  addItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  totalItemNum: jest.fn(),
  totalPrice: jest.fn(),
  formattedTotalPrice: jest.fn(),
  getCart: jest.fn(),
};

const useCartStore = jest.fn(() => [mockCartItems, cartStore]);

export default useCartStore;
