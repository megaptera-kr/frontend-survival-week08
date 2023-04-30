import styled from 'styled-components';
import Restaurant from '../../types/Restaurant';
import MenuList from './MenuList';
import Food from '../../types/FoodType';

const List = styled.main`
  background: ${(props) => props.theme.colors.orderBackground};
  border-radius: 0 80px 0 0;
  padding: 5rem;
`;

const RestaurantName = styled.h3`
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: 700;
  font-size: 4.8rem;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.orderLetterColor};
  margin-bottom: 3rem;
`;

type RestaurantsListProps = {
  restaurants: Restaurant[],
  setSelectedMenus: React.Dispatch<React.SetStateAction<Food[]>>,
}

function RestaurantsList({ restaurants, setSelectedMenus }: RestaurantsListProps) {
  return (
    <List>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <RestaurantName key={restaurant.id}>
            {restaurant.name}
          </RestaurantName>
          <MenuList
            menus={restaurant.menu}
            setSelectedMenus={setSelectedMenus}
          />
        </div>
      ))}
    </List>
  );
}

export default RestaurantsList;
