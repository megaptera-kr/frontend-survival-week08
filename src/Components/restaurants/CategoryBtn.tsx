import React from 'react';
import styled, { css } from 'styled-components';

type StyledButtonProps = {
  isActive: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  margin-inline: 3rem;
  width: 23rem;
  height: 8.4rem;
  padding: 2.1rem, 0px, 1.5rem, 0px;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border: 0.1em;
  font-family: "Pretendard";
  font-size: 4rem;
  font-weight: 500;
  line-height: 4.8rem;
  letter-spacing: -0.03em;
  text-align: center;
  color: white;
  background: none;

  ${(props) => props.isActive
    && css`
      background: ${props.theme.colors.tab};
      color: rgba(255, 132, 0, 1);
    `}
`;

type CategoryBtn = {
  selectedCategory: string;
  setCategory: (category: string) => void;
  category: string;
};

function CategoryBtn({
  selectedCategory,
  setCategory,
  category,
}: CategoryBtn) {
  const handleChangeCategory = (categoryText: string) => {
    setCategory(categoryText);
  };

  return (
    <StyledButton
      type="button"
      isActive={selectedCategory === category}
      onClick={() => handleChangeCategory(category)}
    >
      {category}
    </StyledButton>
  );
}

export default React.memo(CategoryBtn);
