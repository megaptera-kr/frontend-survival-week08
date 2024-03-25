import filterRestaurants from './filterRestaurants';

import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('with [전체] category', () => {
    it('returns all restaurants', () => {
      const filterText = '';
      const filterCategory = '전체';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
      expect(filteredRestaurants).toEqual(restaurants);
    });
  });

  context('with [중식] category', () => {
    it('returns selected category restaurants', () => {
      const filterText = '';
      const filterCategory = '중식';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with filter Text', () => {
    it('returns filtered restaurants', () => {
      const filterText = '테';
      const filterCategory = '중식';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
      expect(filteredRestaurants.length).toBe(0);
    });
  });

  context('with filter Text', () => {
    it('returns filtered restaurants', () => {
      const filterText = '메가반점';
      const filterCategory = '중식';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurants[0].name).toBe(filterText);
    });
  });
});
