import * as S from './CartItem.styled';

interface CartItemProps {
  name: string;
  price: number;
  onRemove: () => void;
}

export default function CartItem({ name, price, onRemove }: CartItemProps) {
  return (
    <S.CartItem>
      <S.RemoveBtn aria-label={`${name} 제거`} onClick={onRemove}>
        <span>제거하기</span>
      </S.RemoveBtn>
      <S.MetaInfo>
        <div>
          <dt>음식 명</dt>
          <dd>{name}</dd>
        </div>
        <div>
          <dt>가격</dt>
          <dd>{`${price.toLocaleString()}원`}</dd>
        </div>
      </S.MetaInfo>
    </S.CartItem>
  );
}
