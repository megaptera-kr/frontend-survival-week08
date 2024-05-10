import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import useCartStore from '../../../../hooks/useCartStore';
import Food from '../../../../types/food';
import Restaurant from '../../../../types/restaurant';
import convertKRW from '../../../../utils/convertKRW';
import StyledButton from '../../../Button';

type RestaurantRowProps = {
  restaurant:Restaurant
}

type FoodButtonProps = {
  isDarkMode:boolean
}

const StyledRow = styled.tr`
  display: flex;
  flex-direction:column;
  padding-block:80px;
  margin-inline: 50px;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.divider_secondary}`};
`;

const StyledRowTitle = styled.td`
  margin-bottom: 20px;
  color:${(props) => props.theme.colors.text};
  font-size:${(props) => props.theme.fontSize.xl};
`;

const StyledMenu = styled.ul`
  display:flex;
  justify-content:space-between;
`;

const StyledFood = styled.li`
  width:310px;
  height: 396px;
`;

const StyledFoodButton = styled(StyledButton)<FoodButtonProps>`
  width: 100%;
  height: 100%;
  text-align: left;
  padding:40px 30px;
  border-radius: 40px;
  font-size:${(props) => props.theme.fontSize.ml};
  background-color: ${(props) => props.theme.colors.food_bg};

  :hover {
    background-color: ${(props) => !props.isDarkMode && props.theme.colors.food_bg_hover};
    outline: ${(props) => `3px solid ${props.theme.colors.primary}`}
  }

  img {
    width: 200px;
    display: block;
    margin-inline: auto;
    margin-bottom: 30px;
  }

  p {
    color:${(props) => props.theme.colors.text}
  }
`;

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const { isDarkMode } = useDarkMode();
  const [, cartStore] = useCartStore();
  const handleClick = (food:Food) => () => {
    cartStore.addCart(food);
  };
  return (
    <StyledRow>
      <StyledRowTitle>{restaurant.name}</StyledRowTitle>
      <td>
        <StyledMenu>
          {restaurant.menu.map((food) => (
            <StyledFood key={food.id}>
              <StyledFoodButton onClick={handleClick(food)} isDarkMode={isDarkMode}>
                <img src={food.image} alt={food.image} />
                <p>{food.name}</p>
                <p>{`${convertKRW(food.price)}원`}</p>
              </StyledFoodButton>
            </StyledFood>
          ))}
        </StyledMenu>
      </td>
    </StyledRow>
  );
}

export default RestaurantRow;
