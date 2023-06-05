import styled from 'styled-components';
import { useRef } from 'react';
import FilterCategories from './FilterCategories';

type FilterRestaurantsProps = {
  filterCategory: string;
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
  categories: string[];
}

const StyledFilterRestaurants = styled.div`
  padding: 0 30px;
`;

const StyledLabel = styled.label`
  display: none;
`;

const StyledInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.searchInput};
  border-radius: 2rem;
  width: 100%;
  height: 80px;
  margin: 60px 0;
  padding: 30px 80px 30px 21px;
  font-size: 3.2rem;
  line-height: 3.2rem;
  color: ${(props) => props.theme.colors.text};
  ::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
  background: url(./images/icon-search.png) 98% 50% / 2.8rem no-repeat;
`;

export default function FilterRestaurants({
  setFilterText, setFilterCategory, filterCategory, categories,
}: FilterRestaurantsProps) {
  const inputId = useRef(`input-${Math.random().toString(36).substring(2, 11)}`);
  const handleFilterText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFilterText(value);
  };

  return (
    <StyledFilterRestaurants>
      {/* <InputText
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        onChange={handleFilterText}
      /> */}
      <StyledLabel htmlFor={inputId.current}>
        검색
      </StyledLabel>
      <StyledInput
        placeholder="식당 이름을 입력해주세요"
        onChange={handleFilterText}
      />
      <FilterCategories
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </StyledFilterRestaurants>
  );
}
