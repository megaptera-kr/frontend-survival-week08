import { render, screen } from '@testing-library/react';
import SearchBar from '.';

const context = describe;
describe('SearchBar', () => {
  const categories = ['전체', '한식'];
  beforeEach(() => {
    render(<SearchBar categories={categories} />);
  });

  it('renders TextField', () => {
    const labelText = screen.getByLabelText(/search/);
    const placeholderText = screen.getByPlaceholderText(/식당이름을 입력해주세요/);

    expect(labelText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
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
