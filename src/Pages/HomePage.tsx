import styled from 'styled-components';
import Header from '../components/Header';

export default function HomePage() {
  const Container = styled.div`
    height: 1600px;
    background: linear-gradient(134.22deg, rgb(248, 158, 33) 0.7%, rgb(255, 100, 0) 65.66%);
  `;

  const Body = styled.div`
    height: 1450px;
  `;

  const Title = styled.h1`
    font-size: 11rem;
    font-weight: bold;
    display: block;
    margin-bottom: 1em;
    text-align: center;
    line-height: 120%;
    color: rgb(255, 255, 255);
  `;

  const ButtonContainer = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const Image = styled.img`
    width: 40%;
    margin-bottom: 1em;
    display: block;
  `;

  const Button = styled.button`
    width: 49%;
    font-size: 4.8rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: 2.5em;
    border: 1px solid transparent;
    border-radius: 1em;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
  `;

  return (
    <Container>
      <Header />
      <Body>
        <Title>원하시는 주문을 터치해주세요</Title>
        <ButtonContainer>
          <Button type="button">
            <Image src="../../static/images/fastfood.png" />
            매장 주문
          </Button>
          <Button type="button">
            <Image src="../../static/images/bag.png" />
            전체 포장
          </Button>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
