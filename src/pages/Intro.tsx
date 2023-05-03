import styled from 'styled-components';
import IntroButton from '../components/intro/IntroButton';

const Main = styled.main`
  padding-top: 10rem;
  padding-bottom: 30rem;
  padding-inline: 30px;
`;

const IntroTitle = styled.h2`
  color: #FFF;
  font-family: 'yg-jalnan';
  font-size: 110px;
  line-height: 140px;
  text-align: center;
  letter-spacing: -0.03em;
  padding-bottom: 110px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

function Intro() {
  return (
    <Main>
      <IntroTitle>원하시는 주문을 터치해주세요</IntroTitle>
      <ButtonGroup>
        <IntroButton
          src="images/fastfood.png"
          alt="fastfoodIcon"
          text="매장주문"
        />
        <IntroButton
          src="images/bag.png"
          alt="bag"
          text="전체포장"
        />
      </ButtonGroup>
    </Main>
  );
}

export default Intro;
