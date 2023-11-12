import styled from 'styled-components';
import Restaurant from '../types/Restaurant';
import ButtonField from './ButtonField';
import TextField from './TextField';

const Container = styled.div`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
`;

type FilterFieldProps = {
  restaurants: Restaurant[]
  filterText: string
  setFilterText: (value: string) => void
  filterCategory: string
  setFilterCategory: (value: string) => void
}

export default function FilterField({
  restaurants,
  filterText,
  setFilterText,
  filterCategory,
  setFilterCategory,
}: FilterFieldProps) {
  return (
    <Container>
      <TextField
        labelText="검색"
        placeholder="식당 이름을 입력해주세요"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonField
        restaurants={restaurants}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </Container>
  );
}
