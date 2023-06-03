import styled from 'styled-components';
import Menu from './Menu';
import useRestaurantStore from '../../hooks/useRestaurantStore';

const Container = styled.ul`
  width: 100%;
  padding: 4.8rem 0;
  border-top-right-radius: 8rem;
  background: ${(props) => props.theme.colors.main.background};
  color: ${(props) => props.theme.colors.sub.text};
`;

export default function MenuContainer() {
  const [{ restaurants }, store] = useRestaurantStore();

  const filteredRestaurants = store.filterRestaurants(restaurants);

  return filteredRestaurants.length > 0 ? (
    <Container>
      { filteredRestaurants.map((restaurant) => (
        <Menu
          key={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
        />
      ))}
    </Container>
  ) : (
    <div>
      메뉴가 준비중 입니다.
    </div>
  );
}
