import { Suspense } from 'react';

import {
  RestaurantsFilter, RestaurantsTable, RestaurantsTableSkeleton, CartSheet,
} from '../../components/order';
import * as S from './OrderPage.styled';

export default function OrderPage() {
  return (
    <S.Container>
      <RestaurantsFilter />
      <Suspense fallback={<RestaurantsTableSkeleton />}>
        <RestaurantsTable />
      </Suspense>
      <CartSheet />
    </S.Container>
  );
}
