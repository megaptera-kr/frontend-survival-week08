import { RestaurantSkeleton } from '../restaurant';
import * as S from './RestaurantsTable.styled';

export default function RestaurantsTableSkeleton() {
  return (
    <S.RestaurantsTable>
      {[...Array.from({ length: 3 }, ((_, i) => (
        <RestaurantSkeleton key={i} />
      )))]}
    </S.RestaurantsTable>
  );
}
