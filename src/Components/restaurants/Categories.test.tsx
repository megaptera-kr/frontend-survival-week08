import { render, screen } from '@testing-library/react';

import TestProvider from '../../hooks/TestProvider';

import Categories from './Categories';

describe('Categories', () => {
  const categories = ['딸기', '포도', '수박'];
  const setCategory = jest.fn();
  const selectedCategory = '딸기';

  it('All buttons contain the whole.', () => {
    render(
      <TestProvider>
        <Categories
          categories={categories}
          setCategory={setCategory}
          selectedCategory={selectedCategory}
        />
      </TestProvider>,
    );

    expect(screen.getByText(/전체/)).toBeInTheDocument();
  });
});
