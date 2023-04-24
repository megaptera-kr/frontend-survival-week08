import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from '../types';

const Container = styled.div`
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.restaurantBg};
  padding: 180px 50px 50px 50px;
  border-radius: 0 80px 0px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard-Regular';
  img {
    width: 120px;
  }
  span {
    margin-top: 16px;
    font-size: 4.8rem;
    line-height: 5.8rem;
    letter-spacing: -0.03em;
    font-weight: 500;
    color: ${(props) => props.theme.colors.orderNum};
  }
`;

const Title = styled.h1`
  font-family: 'Jalnan';
  width: 570px;
  margin-top: 32px;
  font-style: normal;
  font-size: 8rem;
  line-height: 9.6rem;
  text-align: center;
  letter-spacing: -0.03em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.cardText};
`;

const OrderBox = styled.div`
  width: 100%;
  margin-top: 80px;
  border-top: 2px solid ${(props) => props.theme.colors.border2};
  h2 {
    padding: 32px 40px;
    font-size: 4.8rem;
    line-height: 5.8rem;
    font-weight: 700;
    border-bottom: 2px solid ${(props) => props.theme.colors.border1};
    color: ${(props) => props.theme.colors.cardText};
  }
`;

const ListBox = styled.div`
  padding: 20px 0px;
  border-bottom: 2px solid ${(props) => props.theme.colors.border1};
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    color: ${(props) => props.theme.colors.cardText};
    font-size: 3.2rem;
    line-height: 3.8rem;
    font-weight: 400;
    letter-spacing: -0.03em;
    padding: 12px 40px;
    display: flex;
    align-items: center;
  }
  h4 {
    font-size: 3rem;
    line-height: 3.8rem;
    font-weight: 600;
    letter-spacing: -0.03em;
  }
  h6 {
    font-size: 3.2rem;
    line-height: 3.8rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    padding: 0px 40px;
    color: #ff8400;
  }
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 2px solid ${(props) => props.theme.colors.border1};
  h4 {
    color: ${(props) => props.theme.colors.cardText};
    padding: 30px 40px;
    font-size: 3.2rem;
    line-height: 3.8rem;
    letter-spacing: -0.03em;
    font-weight: 700;
  }
  h3 {
    padding: 12px 40px;
    font-size: 4.8rem;
    line-height: 5.7rem;
    font-weight: 700;
    color: #ff8400;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100px;
  margin-top: 310px;
  border: none;
  background-color: #ff8400;
  border-radius: 80px;
  color: white;
  font-size: 2.8rem;
  line-height: 3.3rem;
  letter-spacing: -0.03em;
`;

function OrderComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    state: { id, menu, totalPrice },
  } = location;

  const menus = menu.reduce(
    (acc: [], m: Menu) => (acc.filter((a) => a.name === m.name).length > 0 ? acc : [...acc, m]),
    [],
  );

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <img src="/images/complete.png" alt="complete" />
      <Title>주문이 완료되었습니다.</Title>
      <span>{`주문번호 ${id}`}</span>
      <OrderBox>
        <h2>주문목록</h2>
        <ListBox>
          {menus.map((m: Menu) => (
            <List key={m.id}>
              <h5>
                {m.name}
                <em
                  style={{
                    padding: '0px 10px',
                    fontWeight: '600',
                    color: '#ff8400',
                  }}
                >
                  {menu.filter((me: Menu) => me.name === m.name).length}
                </em>
              </h5>
              <h5>
                {`${m.price.toLocaleString()}원`}
                {`(${(
                  m.price * menu.filter((me: Menu) => me.name === m.name).length
                ).toLocaleString()}원)`}
              </h5>
            </List>
          ))}
        </ListBox>
        <PriceBox>
          <h4>총가격</h4>
          <h3>{`${totalPrice.toLocaleString()}원`}</h3>
        </PriceBox>
      </OrderBox>
      <Button onClick={handleBack}>메인화면으로 돌아가기</Button>
    </Container>
  );
}

export default OrderComplete;
