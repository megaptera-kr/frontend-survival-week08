import { render, screen } from '@testing-library/react';
import CategoryFilter from '.';

const context = describe;
describe('CategoryFilter', () => {
  const categories = ['전체', '한식'];

  beforeEach(() => {
    render(<CategoryFilter categories={categories} />);
  });

  context('it received categories prop', () => {
    it('renders categories button', () => {
      const btns = screen.getAllByRole('button');
      btns.forEach((btn, index) => {
        expect(btn).toHaveTextContent(categories[index]);
      });
    });
  });
});
