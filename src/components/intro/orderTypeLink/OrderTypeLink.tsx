import PATH from '../../../constants/path';
import * as S from './OrderTypeLink.styled';

export type OrderType = 'takeout' | 'eatin';

interface OrderTypeLinkProps {
  orderType: OrderType;
}

const orderTypeTable = {
  eatin: {
    title: '매장 주문',
    imgUrl: '/images/fastfood.png',
  },
  takeout: {
    title: '전체 포장',
    imgUrl: '/images/bag.png',
  },
};

export default function OrderTypeLink({ orderType }: OrderTypeLinkProps) {
  const { title, imgUrl } = orderTypeTable[orderType];
  return (
    <S.OrderTypeLink to={{
      pathname: PATH.ORDER,
      search: `?type=${orderType}`,
    }}
    >
      <S.Icon src={imgUrl} alt="" />
      <S.Title>{title}</S.Title>
    </S.OrderTypeLink>
  );
}
