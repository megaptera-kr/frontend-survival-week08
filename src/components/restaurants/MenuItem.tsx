import styled from 'styled-components';

import { Menu } from '../../types/restaurants';
import { ButtonProps } from '../../types/button';

const Li = styled.li`
  width: 30%;
`;

const Button = styled.button.attrs<ButtonProps>(({ type }) => ({
  type: type || 'button',
}))<ButtonProps>`
  padding: 1em;
  border: 1px solid transparent;
  border-radius: 2em;
  color: ${({ theme }) => theme.colors.globalText};
  background-color: ${({ theme }) => theme.colors.menuItemButtonBg};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  & img {
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  & div {
    padding-block: 0.2em;
    font-size: 3.2rem;
    text-align: left;
  }
`;

type MenuItemProps = {
  food: Menu;
  onClickFood: (food: Menu) => void;
}

export default function MenuItem({ food, onClickFood }: MenuItemProps) {
  return (
    <Li>
      <Button onClick={() => onClickFood(food)}>
        <img src={food.image} alt="" />
        <div>{food.name}</div>
        <div>{`${food.price.toLocaleString()}원`}</div>
      </Button>
    </Li>
  );
}
