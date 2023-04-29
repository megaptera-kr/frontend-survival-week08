import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './Restaurant.styled';

export default function RestaurantsTableSkeleton() {
  return (
    <S.Restaurant>
      <h3><Skeleton width={81} height={28} /></h3>
      <S.Menus>
        {[...Array.from({ length: 3 }, ((_, i) => (
          <Skeleton key={i} width="100%" height="100%" borderRadius={10} style={{ aspectRatio: '0.78' }} />
        )))]}
      </S.Menus>
    </S.Restaurant>
  );
}
