import fixtures from '../../../fixtures';

const useReadCategories = jest.fn(() => ({
  categories: fixtures.categories,
}));

export default useReadCategories;
