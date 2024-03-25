import fixtures from '../../../fixtures';

const useReadRestaurants = jest.fn(() => ({
  restaurants: fixtures.restaurants,
}));

export default useReadRestaurants;
