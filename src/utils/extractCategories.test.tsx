import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

describe('extractCategoreis', () => {
  it('returns categoreis from restaurants', () => {
    const { restaurants } = fixtures;

    const categories = extractCategories(restaurants);

    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
