import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fastfood from '../../static/images/fastfood.png';
import bag from '../../static/images/bag.png';

const Container = styled.div`
  padding-block: 10em 25em; 
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.layoutBackground};
`;

const Title = styled.h2`
  font-size: 9.5rem;
  font-weight: bold;
  display: block;
  margin-bottom: 1em;
  text-align: center;
  line-height: 120%;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 4.4rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 1.5em;
  width: 49%;
  border: 1px solid transparent;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
  
  img {
    margin-bottom: 1em;
    width: 40%;
  }
  
  p {
    color:${(props) => props.theme.colors.text};
  }
`;

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate('/order');
  };

  return (
    <Container>
      <Title>원하시는 주문을 터치해주세요</Title>
      <Wrapper>
        <Button type="button" onClick={handleClickNext}>
          <img src={fastfood} alt="" />
          <p>매장 주문</p>
        </Button>
        <Button type="button" onClick={handleClickNext}>
          <img src={bag} alt="" />
          <p>전체 포장</p>
        </Button>
      </Wrapper>
    </Container>
  );
}
