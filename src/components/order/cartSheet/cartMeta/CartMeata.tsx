import { Badge } from '../../../common';
import * as S from './CartMeata.styled';

interface CartMeataProps {
  totalCount: number;
  totalPrice: number;
}

export default function CartMeata({ totalCount, totalPrice }: CartMeataProps) {
  return (
    <S.CardMeta>
      <S.OrderHistory>
        <img src="/images/shopping-cart.png" alt="" />
        주문내역
        <Badge label={`${totalCount}개`} />
      </S.OrderHistory>
      <S.ExpectedAmount>
        총 결제 예상금액
        {' '}
        <strong>{totalPrice.toLocaleString()}</strong>
        원
      </S.ExpectedAmount>
    </S.CardMeta>
  );
}
