import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './Receipts.styled';

export default function ReceiptsSkeleton() {
  return (
    <S.Receipts>
      <h3>주문목록</h3>
      <S.ReceiptInfo>
        {[...Array.from({ length: 3 }, ((_, i) => (
          <div key={i}>
            <Skeleton width={55} height={19} />
            <Skeleton width={55} height={19} />
          </div>
        )))]}
      </S.ReceiptInfo>
      <S.TotalPrice>
        <dt>총 가격</dt>
        <Skeleton width={101} height={25} />
      </S.TotalPrice>
    </S.Receipts>
  );
}
