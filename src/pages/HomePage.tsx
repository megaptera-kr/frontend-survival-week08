import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  padding-block: 10em 25em;
`;

const TitleCSS = styled.h2`
  margin: auto;
  margin-bottom: 1em;

  width: 778px;
  height: 280px;

  font-family: 'Jalnan OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 110px;
  line-height: 140px;
  text-align: center;
  letter-spacing: -0.03em;

  color: #FFFFFF;
`;

const ButtonCSS = styled.button`
  width: 470px;
  height: 591px;

  background: #FFFFFF;
  border-radius: 40px;
  border: 1px solid transparent;

  text-align: center;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    // background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`;

const ButtonTextCSS = styled.p`
  font-family: 'Jalnan OTF';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 51px;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleCSS>원하시는 주문을 터치해주세요</TitleCSS>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        justifyItems: 'center',
      }}
      >
        <ButtonCSS type="button" onClick={() => navigate('/order')}>
          <img
            src="./images/fastfood.png"
            alt=""
            style={{
              display: 'block',
              margin: 'auto',
              marginBottom: '3em',
              width: '40%',
            }}
          />
          <ButtonTextCSS>매장 주문</ButtonTextCSS>
        </ButtonCSS>
        <ButtonCSS type="button" onClick={() => navigate('/order')}>
          <img
            src="./images/bag.png"
            alt=""
            style={{
              display: 'block',
              margin: 'auto',
              marginBottom: '3em',
              width: '40%',
            }}
          />
          <ButtonTextCSS>전체 포장</ButtonTextCSS>
        </ButtonCSS>
      </div>
    </Container>
  );
}
