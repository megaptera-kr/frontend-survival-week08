import styled from 'styled-components';

import FilterTextField from './FilterTextField';
import Categories from './Categories';

const SearchBarWrap = styled.div`
  padding: 0 3rem;
`;

type SearchBarProps = {
  categories: Array<string>;
  filterText: string;
  setFilterText: (text: string) => void;
  currentCategory: string;
  setCurrentCategory: (text: string) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, currentCategory, setCurrentCategory,
}: SearchBarProps) {
  return (
    <SearchBarWrap>
      <FilterTextField text={filterText} setText={setFilterText} />
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </SearchBarWrap>
  );
}
