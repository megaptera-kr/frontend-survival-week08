/* eslint-disable comma-dangle */
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['중식', '일식', '한식'];
  const filterCategory = '중식';
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderSearchBar() {
    renderWithProviders(
      <SearchBar
        filterText="메가"
        setFilterText={setFilterText}
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    );
  }

  it('renders search input placeholder', () => {
    renderSearchBar();
    screen.getByPlaceholderText(/식당이름을 입력해주세요./);
  });

  it('renders all categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
