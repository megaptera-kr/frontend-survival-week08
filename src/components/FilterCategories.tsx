import styled from 'styled-components';

type FilterCategoriesProps = {
  categories: string[];
  filterCategory: string;
  setFilterCategory: (value: string) => void;
}

const StyledCategoriesList = styled.ul`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  padding: 0;
`;

type StyledFilterButtonProps = {
  isActive: boolean;
}

const StyledFilterButton = styled.button<StyledFilterButtonProps>`
  width: 100%;
  background-color: ${(props) => (props.isActive ? props.theme.colors.subBackground : 'transparent')};
  border: none;
  font-size: 4rem;
  line-height: 4.8rem;
  text-align: center;
  padding: 21px 0;
  border-radius: 20px 20px 0px 0px;
  color: ${(props) => (props.isActive ? props.theme.palette.primary : props.theme.colors.text)};
`;

export default function FilterCategories({
  categories, filterCategory, setFilterCategory,
}: FilterCategoriesProps) {
  function handleClick(category: string) {
    setFilterCategory(category);
  }
  return (
    <StyledCategoriesList>
      {categories.map((category: string) => (
        <li
          key={category}
        >
          <StyledFilterButton
            name={`${category}`}
            isActive={category === filterCategory}
            onClick={() => handleClick(category)}
          >
            {category}
          </StyledFilterButton>
        </li>
      ))}
    </StyledCategoriesList>
  );
}
