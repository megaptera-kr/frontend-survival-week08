import restaurants from '../../fixtures/restaurants';

import select from './select';

const context = describe;

describe('', () => {
  context('select()', () => {
    const category: 'id' | 'category' | 'name' | 'menu' = 'category';
    it.each([
      [[...restaurants], category, '중식', 1],
      [[...restaurants], category, '한식', 3],
      [[...restaurants], category, '일식', 2],
      [[...restaurants], category, '하하', 0],
    ])('select(%s, %s, %s) returns %s', (first, second, third, expected) => {
      expect(select(first, second, third).length).toBe(expected);
    });
  });
});
