import { render, screen } from '@testing-library/react';

import MenuController from './MenuController';

import TestProvider from '../../hooks/TestProvider';

describe('MenuController', () => {
  const query = '메가';
  const selectedCategory = '수박';
  const setQuery = jest.fn();
  const categories = ['포도', '수박', '메론'];
  const setCategory = jest.fn();

  it('render MenuController', () => {
    render(
      <TestProvider>
        <MenuController
          query={query}
          setQuery={setQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </TestProvider>,
    );
    expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
  });

  it('All buttons are visible', () => {
    render(
      <TestProvider>
        <MenuController
          query={query}
          setQuery={setQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </TestProvider>,
    );
    expect(screen.getByText(/전체/)).toBeInTheDocument();
  });
});
