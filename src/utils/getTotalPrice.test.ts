import fixtures from '../../fixtures';
import getTotalPrice from './getTotalPrice';

const { food } = fixtures;

const context = describe;
describe('getTotalPrice', () => {
  context('if it received menu', () => {
    it("it returns sum of menu's price", () => {
      expect(getTotalPrice(food)).toBe(14000);
    });
  });
  context('if it received []', () => {
    it('it returns 0', () => {
      expect(getTotalPrice([])).toBe(0);
    });
  });
});
