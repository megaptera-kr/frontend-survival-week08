import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import OrderedList from '../components/OrderedList';

const Container = styled.div`
  margin-top:40px;
  padding: 0 40px 40px;
  width: 100%;
  min-height:100vh;
  border-top-right-radius: 40px;
  background-color: white;
`;

const MainText = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin:100px auto 0;
  height:550px;
  border-bottom : 1px solid #616161;

  img {
    margin-bottom:30px;
  }

  p{
    font-family: 'Jalnan OTF';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 96px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #000000;
  }

  span {
    margin-top:20px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 58px;
    letter-spacing: -0.03em;
    color: #6A6A6A;
  }
`;

const GoMainBtn = styled.button`
  margin-top: 100px;
  width: 980px;
  height: 100px;
  background: #FF8400;
  border-radius: 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  text-decoration:none;
  cursor:pointer;
`;

export default function OrderDone() {
  const location = useLocation();
  const { receipt } = location.state || {};

  return (
    <Container>
      <MainText>
        <img src="/images/complete.png" width={120} height={120} alt="completedImg" />
        <p>주문이</p>
        <p>완료되었습니다!</p>
        <span>
          주문번호
          {' '}
          {receipt.id}
        </span>
      </MainText>

      <OrderedList receipt={receipt} />

      <Link to="/" className="link">
        <GoMainBtn>메인화면으로 돌아가기</GoMainBtn>
      </Link>
    </Container>
  );
}
