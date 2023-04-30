import { useState } from 'react';
import styled from 'styled-components';

const CategoriesSection = styled.div`
  display: flex;
`;

type ButtonProps = {
  selectedCategory: string,
  categoryName: string
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  border: 0px;
  border-radius: 20px 20px 0px 0px;
  background: ${(props) => (
    props.selectedCategory === props.categoryName
      ? props.theme.colors.orderBackground
      : 'rgba(0, 0, 0, 0)'
  )};
  color : ${(props) => (
    props.selectedCategory === props.categoryName ? '#FF8400' : 'white'
  )};
  font-family: 'Pretendard-Regular';
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.03em;
  padding: 2.5rem;
  cursor: pointer;
`;

type CategoriesProp = {
  categoryKeyword: string,
  setCategoryKeyWord: React.Dispatch<React.SetStateAction<string>>,
}

function Categories({ categoryKeyword, setCategoryKeyWord }: CategoriesProp) {
  const categories = ['전체', '중식', '한식', '일식'];

  return (
    <CategoriesSection>
      {categories.map((item) => (
        <Button
          type="button"
          key={item}
          onClick={() => {
            setCategoryKeyWord(item);
          }}
          categoryName={item}
          selectedCategory={categoryKeyword}
        >
          {item}
        </Button>
      ))}
    </CategoriesSection>
  );
}

export default Categories;
