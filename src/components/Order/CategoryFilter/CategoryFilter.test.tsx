import { fireEvent, render, screen } from '@testing-library/react';
import CategoryFilter from '.';

const context = describe;
describe('CategoryFilter', () => {
  const categories = ['전체', '한식'];
  const selectedCategory = '전체';
  const setSelectedCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(<CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />);
  });

  context('it received categories prop', () => {
    it('renders categories button', () => {
      const btns = screen.getAllByRole('button');
      btns.forEach((btn, index) => {
        expect(btn).toHaveTextContent(categories[index]);
      });
    });
  });

  context('if user click button', () => {
    it('setSelectedCategory func will be called 1 time', () => {
      const firstButton = screen.getAllByRole('button')[0];
      fireEvent.click(firstButton);

      expect(setSelectedCategory).toHaveBeenCalledTimes(1);
    });
  });
});
