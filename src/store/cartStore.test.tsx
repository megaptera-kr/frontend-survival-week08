import CartStore from './cartStore';

const cartStore = new CartStore();

const context = describe;
describe('전역상태를 확인한다.', () => {
  context('cartStore를 생성한다.', () => {
    it('cartStore의 totalPrice 초기값을 확인한다.', () => {
      expect(cartStore.totalPrice).toBe(0);
    });
  });
});
