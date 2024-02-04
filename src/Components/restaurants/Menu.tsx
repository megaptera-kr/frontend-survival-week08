import styled from 'styled-components';

import Food from '../../types/Food';

import MenuItem from './MenuItem';

const StyledContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

type MenuProps = {
  menu: Food[];
};
export default function Menu({ menu }: MenuProps) {
  if (!menu.length) {
    return <p>메뉴가 존재하지 않습니다.!</p>;
  }
  return (
    <StyledContainer>
      {menu?.map((food) => (
        <MenuItem key={food.id} food={food} />
      ))}
    </StyledContainer>
  );
}
