import { screen } from '@testing-library/react';
import SearchBar from '../../components/restaurants/SearchBar';

import renderWithProviders from '../../testHelper';

describe('<SearchBar />', () => {
  const categories = ['중식', '한식', '일식'];
  const currentCategory = '전체';
  const filterText = '';

  const setFilterText = jest.fn();
  const setCurrentCategory = jest.fn();

  it('renders without crash', () => {
    renderWithProviders(<SearchBar
      categories={categories}
      filterText={filterText}
      setFilterText={setFilterText}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
    />);

    screen.getByLabelText('검색');
    categories.forEach((category) => screen.getByRole('button', { name: category }));
  });
});
