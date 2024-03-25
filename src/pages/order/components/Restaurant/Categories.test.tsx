import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../../../testHelper';

import Categories from './Categories';

import { Category } from '../../../../types/Restaurant';

describe('Categories', () => {
  const categories: Category[] = ['한식', '일식', '중식'];

  const setFilterCategory = jest.fn();

  it('renders all categories', () => {
    renderWithProviders((
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    ));

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('listens for category click event', () => {
    renderWithProviders((
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    ));

    fireEvent.click(screen.getByText('한식'));

    expect(setFilterCategory).toBeCalledWith('한식');
  });
});
