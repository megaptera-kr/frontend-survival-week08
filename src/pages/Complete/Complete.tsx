import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOrders } from '../../services/getOrders';
import * as Styles from './styles';

interface Food {
  id: string,
  name: string,
  price: number,
}

interface Order {
  id: string,
  menu: Food[],
  totalPrice: number,
}

export default function Complete() {
  const [menues, setMenues] = useState<Food[]>([]);
  const [allTotalPrice, setAllTotalPrice] = useState(0);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const ordersId = searchParams.get('ordersId');
  const getOrderDetail = async () => {
    if (!ordersId) {
      return;
    }

    const response = await getOrders(ordersId);
    const { order } : {order : Order} = response;
    const { menu, totalPrice } = order;
    setMenues([...menu]);
    setAllTotalPrice(totalPrice);
  };

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    getOrderDetail();
  }, []);
  return (
    <Styles.CompleteWrapper>
      <Styles.TitleWrapper>
        <Styles.CompleteTitle>주문이 완료되었습니다!</Styles.CompleteTitle>
        <Styles.OrderNumber>
          주문번호
          {ordersId}
        </Styles.OrderNumber>
      </Styles.TitleWrapper>
      <Styles.OrderListWrapper>
        <Styles.OrderListTitle>주문목록</Styles.OrderListTitle>
        <Styles.OrderList className="cart-menu-list">
          {menues.map((item, itemIdx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Styles.OrderItem key={`cart_${itemIdx}`}>
              <Styles.OrderInfo>{item.name}</Styles.OrderInfo>
              <Styles.OrderInfo>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </Styles.OrderInfo>
            </Styles.OrderItem>
          ))}
        </Styles.OrderList>
        <Styles.TotalInfomation as="div">
          <Styles.TotalText>
            총 가격
          </Styles.TotalText>
          <Styles.TotalPrice>
            {allTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </Styles.TotalPrice>
        </Styles.TotalInfomation>
      </Styles.OrderListWrapper>
      <Styles.MainButton onClick={goHome}>메인화면으로 돌아가기</Styles.MainButton>
    </Styles.CompleteWrapper>
  );
}
