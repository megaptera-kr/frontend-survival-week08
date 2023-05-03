import { OrderTypeLink } from '../../components/intro';
import * as S from './IntroPage.styled';

export default function IntroPage() {
  return (
    <S.Container>
      <h2>
        원하시는 주문을 터치해주세요
      </h2>
      <S.OrderLinks>
        <OrderTypeLink orderType="eatin" />
        <OrderTypeLink orderType="takeout" />
      </S.OrderLinks>
    </S.Container>
  );
}
