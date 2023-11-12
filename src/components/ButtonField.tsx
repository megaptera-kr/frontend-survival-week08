import styled, { css } from 'styled-components';
import Restaurant from '../types/Restaurant';
import selectCategories from '../utils/selectCategories';

const Container = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const FilterList = styled.li`
  width: 25%;
`;

type ButtonProps = {
  active: boolean;
};

const Button = styled.button<ButtonProps>`
  font-size: 4rem;
  padding-block: .5em;
  width: 100%;
  border: 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: transparent;
  color: #FFFFFF;
  cursor: pointer;

  ${(props) => props.active && css`
    color: #FF8400;
    background: ${props.theme.colors.secondary};
  `}
`;

type ButtonFieldProps = {
  restaurants: Restaurant[]
  filterCategory: string
  setFilterCategory: (value: string) => void
}

export default function ButtonField({
  restaurants,
  filterCategory,
  setFilterCategory,
}: ButtonFieldProps) {
  const categories = selectCategories(restaurants);

  const handleClickCategoryButton = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <Container>
      {categories.map((category) => (
        <FilterList
          key={category}
          style={{ marginRight: '1rem' }}
        >
          <Button
            type="button"
            active={filterCategory === category}
            onClick={() => {
              handleClickCategoryButton(category);
            }}
          >
            {category}
          </Button>
        </FilterList>
      ))}
    </Container>
  );
}
