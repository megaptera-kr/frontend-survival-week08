import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import { Food } from '../types/restaurant';
import Button from './common/button/Button';

type RestaurantsTableBodyFoodProps = {
  menu: Food[]
}

const StyledFoodList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  column-gap: 25px;
`;

const StyledFood = styled.button`
  width: 100%;
  border: none;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.colors.listBackground};
  padding: 40px 30px;
  border: 3px solid transparent;
  cursor: pointer;
  :hover {
    border: 3px solid ${(props) => props.theme.colors.listBorderHover};
    background-color: ${(props) => props.theme.colors.listBackgroundHover};
  }
`;

const StyledFoodImg = styled.img`
  width: 100%;
  margin-bottom: 55px;
`;

const StyledFoodParagraph = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.8rem;
  text-align: left;
  color: ${(props) => props.theme.colors.listTitle};
`;

export default function RestaurantsTableBodyFood({ menu }: RestaurantsTableBodyFoodProps) {
  const [, cartStore] = useCartStore();

  const handleClick = (food: Food) => {
    cartStore.addItem(food);
  };
  return (
    <StyledFoodList>
      {menu.map((food: Food, index: number) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${food.id}-${index}`}
        >
          <StyledFood
            name={food.name}
            onClick={() => handleClick(food)}
            data-testid={food.name}
          >
            <StyledFoodImg
              src={food.image}
              alt={food.name}
            />
            <StyledFoodParagraph>{food.name}</StyledFoodParagraph>
            <StyledFoodParagraph>{`${food.price.toLocaleString('ko-kr')}원`}</StyledFoodParagraph>
          </StyledFood>
        </li>
      ))}
    </StyledFoodList>
  );
}
