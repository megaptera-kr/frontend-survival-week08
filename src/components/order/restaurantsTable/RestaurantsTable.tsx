import { useSearchParams } from 'react-router-dom';

import { Restaurant } from '../restaurant';
import { useFetchRestaurants } from '../../../services/useKiosk';
import { restaurantsTab } from '../../../static/restaurantsTab';
import { parseCategory } from '../../../utils/categoryTab';
import * as S from './RestaurantsTable.styled';

export default function RestaurantsTable() {
  const [searchParams] = useSearchParams();

  const { data: restaurants = [] } = useFetchRestaurants();

  const category = parseCategory(searchParams.get('category') ?? '');

  const renderContent = restaurants.length
    ? restaurants.map((restaurant) => (<Restaurant key={restaurant.id} restaurant={restaurant} />))
    : <S.NoSearch>검색결과가 없습니다.</S.NoSearch>;

  return (
    <S.RestaurantsTable id={restaurantsTab[category].panel} tabIndex={0} role="tabpanel" aria-describedby={restaurantsTab[category].id}>
      <S.A11yTitle>식당 목록</S.A11yTitle>
      {renderContent}
    </S.RestaurantsTable>
  );
}
