import { render, screen, fireEvent } from '@testing-library/react';

import Category from './Category';

const context = describe;

describe('Category', () => {
  const categoryList = ['전체', '중식', '한식', '일식'];
  const setSelectedCategory = jest.fn();

  function renderCategory() {
    render(<Category categoryList={categoryList} selectedCategory="" setSelectedCategory={setSelectedCategory} />);
  }

  it('render Category', () => {
    renderCategory();
    screen.getByText(/전체/);
  });
  context('user click category', () => {
    it('calls "setSelectedCategory" handler', () => {
      renderCategory();

      fireEvent.click(screen.getByText('한식'));
      expect(setSelectedCategory).toBeCalledWith('한식');
    });
  });
});
