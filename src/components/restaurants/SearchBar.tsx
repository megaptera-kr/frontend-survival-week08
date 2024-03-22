import styled from 'styled-components';
import TextField from '../common/TextField';
import Categories from './Categories';

const SearchBarStyle = styled.section`
  padding: 0 2rem;
`;

type SearchBarProps = {
  filterText: string;
  setFilterText: (text: string) => void;
  categories: string[];
  filterCategory: string;
  setFilterCategory: (text: string) => void;
};

function SearchBar({
  filterText,
  setFilterText,
  categories,
  filterCategory,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <SearchBarStyle>
      <TextField
        placeholder="식당이름을 입력해주세요."
        text={filterText}
        setText={setFilterText}
      />
      <Categories
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </SearchBarStyle>
  );
}

export default SearchBar;
