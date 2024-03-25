/* eslint-disable comma-dangle */
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Category from './Category';

describe('Category', () => {
  const category = '중식';
  const filterCategory = '중식';
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategory() {
    renderWithProviders(
      <Category
        category={category}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    );
  }

  it('renders elements', () => {
    renderCategory();

    fireEvent.click(screen.getByText(/중식/));
    expect(setFilterCategory).toBeCalled();
  });
});
