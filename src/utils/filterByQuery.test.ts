import fixtures from '../../fixtures';
import filterByQuery from './filterByQuery';

const { restaurants } = fixtures;

const context = describe;
describe('filterByQuery', () => {
  context('if it received only restaurants', () => {
    it('it returns restaurants as it is', () => {
      expect(filterByQuery(restaurants)).toEqual(restaurants);
    });
  });

  context('if it received restaurants, query', () => {
    it('it returns filtered restaurants by restaurants name and category', () => {
      expect(filterByQuery(
        restaurants,
        { text: '메', category: '중식' },
      )).toEqual([{
        id: '1',
        category: '중식',
        name: '메가반점',
        menu: [
          {
            id: '1',
            name: '짜장면',
            price: 8000,
            image: 'food1.png',
          },
          {
            id: '2',
            name: '짬뽕',
            price: 8000,
            image: 'food2.png',
          },
          {
            id: '3',
            name: '탕수육',
            price: 14000,
            image: 'food3.png',
          },
        ],
      }]);
    });
  });
});
