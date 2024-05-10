import { screen } from '@testing-library/react';
import SearchBar from '.';
import renderWithThemeProvider from '../../../renderWithThemeProvider';

const context = describe;
describe('SearchBar', () => {
  const categories = ['전체', '한식'];
  const filterText = '';
  const setFilterText = jest.fn();
  const selectedCategory = '전체';
  const setSelectedCategory = jest.fn();

  beforeEach(() => {
    renderWithThemeProvider(<SearchBar
      categories={categories}
      filterText={filterText}
      setFilterText={setFilterText}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />);
  });

  it('renders TextField', () => {
    const labelText = screen.getByLabelText(/검색/);
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
