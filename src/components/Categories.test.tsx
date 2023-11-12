import { screen } from '@testing-library/react';
import Categories from './Categories';
import { renderWithProviders } from '../testHelper';

describe('Categories', () => {
  const categories = ['한식', '중식', '일식'];

  const setFilterCategory = jest.fn();

  it('renders Categories', () => {
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
});
