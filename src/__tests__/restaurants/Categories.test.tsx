import { screen } from '@testing-library/react';
import Categories from '../../components/restaurants/Categories';

import renderWithProviders from '../../testHelper';

describe('<Categories />', () => {
  const categories = ['중식', '한식', '일식'];
  const setCurrentCategory = jest.fn();

  it('renders without crash', () => {
    renderWithProviders((
      <Categories
        categories={categories}
        currentCategory="중식"
        setCurrentCategory={setCurrentCategory}
      />
    ));

    screen.getByText('한식');
    categories.forEach((category) => screen.getByText(category));
  });
});
