import { useState } from 'react';
import styled from 'styled-components';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import RestaurantsList from '../components/RestaurantsList';
import SearchBar from '../components/SearchBar';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterRestaurants from '../utils/filterRestaurants';

const Container = styled.div`
  padding-inline: 3rem;
  padding-bottom: 40px;
`;

const MenuList = styled.div`
  padding-block: 3em;
  padding-inline: 3rem;
  border-top-right-radius: 8rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default function Order() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setCategory] = useState<string>('전체');

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { filterText, filterCategory },
  );

  return (
    <Container>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        placeholder="식당이름을 입력해주세요"
      />
      <Categories
        restaurants={restaurants}
        filterCategory={filterCategory}
        setCategory={setCategory}
      />
      <MenuList>
        <RestaurantsList filteredRestaurants={filteredRestaurants} />
      </MenuList>
      <Cart />
    </Container>
  );
}
