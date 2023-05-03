import { Suspense } from 'react';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';

import { Button } from '../../components/common';
import { OrderCompleteMessage, Receipts, ReceiptsSkeleton } from '../../components/orderComplete';
import PATH from '../../constants/path';
import * as S from './OrderCompletePage.styled';

export default function OrderCompletePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderId = searchParams.get('orderId');

  const handleNavigateIntro = () => {
    navigate(PATH.ROOT);
  };

  return orderId ? (
    <S.Container>
      <S.Content>
        <OrderCompleteMessage orderId={orderId} />
        <Suspense fallback={<ReceiptsSkeleton />}>
          <Receipts orderId={orderId} />
        </Suspense>
      </S.Content>
      <S.Bottom>
        <Button label="메인화면으로 돌아가기" onClick={handleNavigateIntro} />
      </S.Bottom>
    </S.Container>
  ) : (
    <Navigate to={PATH.ROOT} />
  );
}
