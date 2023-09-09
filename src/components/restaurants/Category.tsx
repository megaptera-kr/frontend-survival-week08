import styled, { css } from 'styled-components';

import { ButtonProps } from '../../types/button';

const CategoryItem = styled.li`
  width: 25%;
`;

type CategoryButtonProps = {
  isSelectedCategory: boolean;
} & ButtonProps

const CategoryButton = styled.button.attrs<CategoryButtonProps>((props) => ({
  type: props.type || 'button',
}))<CategoryButtonProps>`
  width: 100%;
  padding: 0.5em 0;
  border: none;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  font-size: 4rem;
  background-color: ${(props) => (props.isSelectedCategory
    ? props.theme.colors.categoryButtonBg
    : 'inherit')};
  color: ${(props) => (props.isSelectedCategory
    ? props.theme.colors.primary
    : props.theme.colors.text)};
  transition: all 0.1s ease;
`;

type CategoryProps = {
  category: string;
  currentCategory: string;
  setCurrentCategory: (text: string) => void;
}

export default function Category({
  category, currentCategory, setCurrentCategory,
}: CategoryProps) {
  return (
    <CategoryItem>
      <CategoryButton
        isSelectedCategory={category === currentCategory}
        onClick={() => setCurrentCategory(category)}
      >
        {category}
      </CategoryButton>
    </CategoryItem>
  );
}
