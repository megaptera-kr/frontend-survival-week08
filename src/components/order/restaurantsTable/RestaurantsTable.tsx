import { Restaurant } from '../restaurant';
import { useFetchRestaurants } from '../../../services/useKiosk';
import * as S from './RestaurantsTable.styled';

export default function RestaurantsTable() {
  const { data: restaurants = [], isSuccess } = useFetchRestaurants();

  const renderContent = restaurants.length
    ? restaurants.map((restaurant) => (<Restaurant key={restaurant.id} restaurant={restaurant} />))
    : <S.NoSearch>검색결과가 없습니다.</S.NoSearch>;

  return (
    <S.RestaurantsTable>
      <S.A11yTitle>식당 목록</S.A11yTitle>
      {isSuccess && renderContent}
    </S.RestaurantsTable>
  );
}
