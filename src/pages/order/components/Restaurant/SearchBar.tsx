import styled from 'styled-components';

import TextField from './TextField';
import Categories from './Categories';

import { Category } from '../../../../types/Restaurant';

const Container = styled.div`
  padding-inline: 3rem;

  label {
    display: none;
  }

  input {
    margin-block: 3rem;
    font-size: 3.2rem;
    padding: .5em;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.textFieldBorderLine};
    border-radius: 1.5rem;
    background: url("/images/icon-search.png") no-repeat 98% 50% / 4rem;
    color: #FFFFFF;
  }

  input::placeholder {
    color: #FFFFFF;
  }
`;

type SearchBarProps = {
    categories: Category[];
    filterText: string;
    setFilterText: (text: string) => void;
    setFilterCategory: (text: Category) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <Container>
      <TextField
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        text={filterText}
        setText={setFilterText}
      />
      <Categories categories={categories} setFilterCategory={setFilterCategory} />
    </Container>
  );
}
