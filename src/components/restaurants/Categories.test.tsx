/* eslint-disable comma-dangle */
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Categories from './Categories';

describe('Categories', () => {
  const categories = ['중식', '일식', '한식'];
  const filterCategory = '중식';
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategory() {
    renderWithProviders(
      <Categories
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    );
  }

  it('renders category', () => {
    renderCategory();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
