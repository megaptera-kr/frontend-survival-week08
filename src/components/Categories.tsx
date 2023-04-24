import styled, { css } from 'styled-components';
import Restaurant from '../types/Restaurant';
import selectCategories from '../utils/selectCategories';

type CategoryProps = {
  restaurants: Restaurant[],
  filterCategory: string,
  setCategory: (text: string) => void;
}

type ButtonProps = {
  active: boolean;
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CategoryTab = styled.ul`
  display: flex;
  padding:0;
  margin-bottom: 0;
`;

const CategoryItem = styled.li`
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`;

const CategoryButton = styled.button<ButtonProps>`
  font-size: 2.2rem;
  font-weight: bold;
  padding-block: .8em;
  width: 100%;
  border: 0;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: transparent;
  color: #fff;
  cursor: pointer;

  ${(props) => props.active && css`
    color: #ff8400;
    background: ${props.theme.colors.secondary};
    transition: .3s;
  `}
`;

export default function Categories({
  restaurants,
  filterCategory,
  setCategory,
}:CategoryProps) {
  const categories = selectCategories(restaurants);

  const handleClick = (category: string) => {
    setCategory(category);
  };

  return (
    <CategoryTab>
      {['전체', ...categories].map((category: string) => (
        <CategoryItem key={category}>
          <CategoryButton
            type="button"
            active={filterCategory === category}
            onClick={() => handleClick(category)}
          >
            {category}
          </CategoryButton>
        </CategoryItem>
      ))}
    </CategoryTab>
  );
}
