import { screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../testHelper';

describe('SearchBar', () => {
  const categories = ['일식', '중식', '한식'];
  const filterText = '메가';

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  it('renders SearchBar', () => {
    renderWithProviders((
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    ));

    screen.getByText(/검색/);

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
