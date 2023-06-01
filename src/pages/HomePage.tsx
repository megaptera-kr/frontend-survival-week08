import styled from 'styled-components';
import OrderButton from '../components/home/OrderButton';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16rem 3rem 40rem;
`;

const HeadingTwo = styled.h2`
  width: 77.8rem;
  height: 28rem;

  font-family: 'Jalnan OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 11rem;
  line-height: 14rem;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 11rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;

export default function HomePage() {
  return (
    <HomeContainer>
      <HeadingTwo>
        원하시는 주문을 터치해주세요
      </HeadingTwo>
      <ButtonContainer>
        <OrderButton name="매장 주문" image="fastfood" />
        <OrderButton name="전체 포장" image="bag" />
      </ButtonContainer>
    </HomeContainer>
  );
}
