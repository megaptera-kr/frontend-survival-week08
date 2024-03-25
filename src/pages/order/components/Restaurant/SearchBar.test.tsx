import { screen } from '@testing-library/react';

import SearchBar from './SearchBar';

import { renderWithProviders } from '../../../../testHelper';

import { Category } from '../../../../types/Restaurant';

describe('SearchBar', () => {
  const categories : Category[] = ['한식', '중식', '일식'];

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  function renderSearchBar() {
    renderWithProviders((
      <SearchBar
        categories={categories}
        filterText=""
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  it('renders search label text', () => {
    renderSearchBar();

    screen.getByLabelText(/검색/);
  });

  it('renders all categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
