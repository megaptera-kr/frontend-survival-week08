import { useState } from 'react';

import styled, { css } from 'styled-components';

import { Category } from '../../../../types/Restaurant';

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;

type ButtonProps = {
  active: boolean;
};

const Button = styled.button<ButtonProps>`
  width: 25%;
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
    background: ${props.theme.colors.background02};
    transition: .3s;
  `}
`;

type CategoriesProps = {
  categories: Category[];
  setFilterCategory: (text: Category) => void;
}

export default function Categories({
  categories, setFilterCategory,
}: CategoriesProps) {
  const categoryList : Category[] = ['전체', ...categories];
  const [selectedCategory, setCategory] = useState('전체');

  const handleSetFilterCategory = (category: Category) => {
    setFilterCategory(category);

    setCategory(category);
  };

  return (
    <Container>
      {categoryList.map((category: Category) => (
        <Button
          key={category}
          active={category === selectedCategory}
          type="button"
          onClick={() => handleSetFilterCategory(category)}
        >
          {category}
        </Button>
      ))}
    </Container>
  );
}
