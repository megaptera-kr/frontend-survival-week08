import styled from 'styled-components';
import Restaurant from '../../types/Restaurant';

import RestaurantItem from './RestaurantItem';

import PageCommonWrapStyle from '../../styles/PageCommonWrapStyle';

const RestaurantsWrapStyle = styled(PageCommonWrapStyle)`
  padding: 0 5rem;
  border-radius: 0 8rem 0 0;
  background-color: ${(props) => props.theme.items.itemWrapBg};

  .none_msg {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: calc(100vh - 16rem);
    text-align: center;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

type RestaurantsProps = {
  restaurants: Restaurant[];
};

export default function Restaurants({ restaurants }: RestaurantsProps) {
  if (!restaurants.length) {
    return (
      <RestaurantsWrapStyle>
        <p className="none_msg">식당이 존재하지 않습니다.</p>
      </RestaurantsWrapStyle>
    );
  }

  return (
    <RestaurantsWrapStyle>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.name} restaurant={restaurant} />
      ))}
    </RestaurantsWrapStyle>
  );
}
