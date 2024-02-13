import styled from 'styled-components';

import Food from '../../types/Food';
import useStore from '../../hooks/useStore';

const StyledContainer = styled.li`
  width: 30%;
`;

const StyledButton = styled.button`
  padding: 3rem;
  border-radius: 4rem;
  background: ${(props) => props.theme.colors.menuCard};
  span {
    font-family: "Pretendard";
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.8rem;
    letter-spacing: -0.03em;
    text-align: left;
    display: block;
    color: ${(props) => props.theme.colors.text};
  }
  &:hover {
    background: ${(props) => props.theme.colors.menuHover};
    border: 3px solid rgba(255, 132, 0, 1);
  }
  cursor: pointer;
`;

const StyledFoodImg = styled.img`
  width: 80%;
  margin: 0 auto;
  display: block;
`;

type MenuItemProps = {
  food: Food;
};

export default function MenuItem({ food }: MenuItemProps) {
  const { name, price, image } = food;
  const store = useStore();
  const handleAddMenu = () => {
    store.addMenu(food);
  };

  return (
    <StyledContainer>
      <StyledButton type="button" onClick={handleAddMenu}>
        <StyledFoodImg src={image} alt="" />
        <span>{name}</span>
        <span>
          {price.toLocaleString()}
          원
        </span>
      </StyledButton>
    </StyledContainer>
  );
}
