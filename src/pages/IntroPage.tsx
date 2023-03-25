import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const IntroText = styled.div`
  margin:290px 0 130px 0;
  height: 280px;
  width: 778px;
  left: 150px;
  top: 410px;
  font-family: Jalnan OTF;
  font-size: 110px;
  font-weight: 700;
  line-height: 140px;
  letter-spacing: -0.03em;
  text-align: center;
`;

const StartBtn = styled.button.attrs({
  type: 'button',
})`
  margin-right:20px;
  width: 470px;
  height: 591px;
  left: 50px;
  top: 842px;
  background: #FFFFFF;
  border-radius: 40px;
  cursor: pointer;

  p {
    margin-top:68px;
    font-family: Jalnan OTF;
    font-size: 48px;
    font-weight: 700;
    line-height: 51px;
    letter-spacing: -0.03em;
    text-align: center;
  }
`;

export default function IntroPage() {
  const navigate = useNavigate();

  const goToOrder = () => {
    navigate('/order');
  };

  return (
    <Container>
      <IntroText className="main-text">
        원하시는 주문을
        터치해주세요
      </IntroText>

      <div>
        <StartBtn onClick={goToOrder}>
          <img src="/images/fastfood.png" width={180} height={180} alt="fastfood" />
          <p>매장 주문</p>
        </StartBtn>

        <StartBtn onClick={goToOrder}>
          <img src="/images/bag.png" width={180} height={180} alt="bag" />
          <p>전체 포장</p>
        </StartBtn>
      </div>
    </Container>
  );
}
