import styled from 'styled-components';
import OrderCard from '../components/OrderCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 11rem;
  font-family: 'Jalnan';
  font-weight: 700;
  color: white;
  line-height: 14rem;
  letter-spacing: -0.03em;
  user-select: none;
`;

const TitleBox = styled.div`
  text-align: center;
  padding-top: 280px;
  padding-bottom: 142px;
`;

const CardBox = styled.div`
  display: flex;
  gap: 40px;
`;

function HomePage() {
  return (
    <Container>
      <TitleBox>
        <Title>원하시는 주문을 터치해 주세요</Title>
      </TitleBox>
      <CardBox>
        <OrderCard imgName="fastfood" title="매장 주문" />
        <OrderCard imgName="bag" title="전체 포장" />
      </CardBox>
    </Container>
  );
}

export default HomePage;
