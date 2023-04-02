import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import Menu from '../types/Menu';
import Restaurant from '../types/Restaurant';
import Menus from './Menus';

const MenuName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 20px;
`;

type RestaurantsListProps = {
  filteredRestaurants: Restaurant[]
}

export default function RestaurantsList({ filteredRestaurants }: RestaurantsListProps) {
  const [, store] = useCartStore();

  const handleClickSelect = (menu: Menu) => {
    store.addMenu(menu);
  };

  return (
    <div>
      {
        filteredRestaurants?.map((restaurant) => (
          <div key={restaurant.id}>
            <MenuName>{restaurant.name}</MenuName>
            <Menus menu={restaurant.menu} onClickItem={handleClickSelect} />
          </div>
        ))
      }
    </div>
  );
}
