import { useState } from 'react';
import styled from 'styled-components';
import { container } from 'tsyringe';
import OrderInfo from '../components/OrderInfo';
import RestaurantsBox from '../components/RestaurantsBox';
import Search from '../components/Search';
import OrderStore from '../store/OrderStore';
import useFetchRestaurants from '../useHooks/useFetchRestaurants';
import useForceUpdate from '../useHooks/useForceUpdate';

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const TabBox = styled.div`
  margin-top: 40px;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
`;

type TabProps = {
  select: boolean;
};

const Tab = styled.div<TabProps>`
  width: 230px;
  text-align: center;
  padding: 21px 0px 15px 0px;
  background-color: ${(props) =>
    props.select ? props.theme.colors.restaurantBg : 'transparent'};
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: ${(props) => (props.select ? '#ff8400' : 'white')};
  border-radius: 20px 20px 0px 0px;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  user-select: none;
`;

function Restaurants() {
  const store = container.resolve(OrderStore);
  const forceUpdate = useForceUpdate();
  store.forceUpdate = forceUpdate;
  const [filterTerm, setFilterTerm] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const restaurants = useFetchRestaurants();
  const categories = ['전체', '중식', '한식', '일식'];
  const resultRestaurants =
    filterTerm === '전체'
      ? searchTerm
        ? restaurants.filter((restaurant) =>
            restaurant.name.includes(searchTerm)
          )
        : restaurants
      : searchTerm
      ? restaurants
          .filter((restaurant) => restaurant.category === filterTerm)
          .filter((r) => r.name.includes(searchTerm))
      : restaurants.filter((restaurant) => restaurant.category === filterTerm);

  return (
    <Container>
      <Search setSearchTerm={setSearchTerm} />
      <TabBox>
        {categories.map((category) => (
          <Tab
            key={category}
            select={category === filterTerm}
            onClick={() => setFilterTerm(category)}
          >
            {category}
          </Tab>
        ))}
      </TabBox>
      <RestaurantsBox filterTerm={filterTerm} restaurants={resultRestaurants} />
      <OrderInfo />
    </Container>
  );
}

export default Restaurants;
