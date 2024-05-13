import fixtures from '../../fixtures';
import Restaurant from '../types/restaurant';
import getUniqueCategory from './getUniqueCategory';

const { restaurants } = fixtures;

const context = describe;
describe('getUniqueCategory', () => {
  context('received restaurants', () => {
    it("returns restaurant's category array", () => {
      expect(getUniqueCategory(restaurants)).toEqual(['전체', '중식', '한식']);
    });
  });

  context('received restaurants included duplicated category', () => {
    const duplicatedRestaurants:Restaurant[] = [
      {
        id: '1',
        name: '메가테라분식',
        category: '한식',
        menu: [],
      },
      {
        id: '2',
        name: '메가테라뷔페',
        category: '한식',
        menu: [],
      },
      {
        id: '3',
        name: '메가테라이자카야',
        category: '일식',
        menu: [],
      },
    ];
    it("returns unique restaurant's category array", () => {
      expect(getUniqueCategory(duplicatedRestaurants)).toEqual(['전체', '한식', '일식']);
    });
  });
});
