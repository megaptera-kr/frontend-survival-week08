import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  padding-block: 7.5em 20em; 
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.layoutBackground};
`;

const Title = styled.h2`
  font-size: 11rem;
  font-weight: bold;
  display: block;
  margin-bottom: 1em;
  text-align: center;
  line-height: 120%;
  color: #FFFFFF;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 49%;
  padding-block: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4.8rem;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }

  img {
    display: block;
    margin-bottom: 1em;
    width: 40%;
  }

  span {
    display: block;
  }
`;

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <Container>
      <Title>원하시는 주문을 터치해주세요</Title>
      <Wrapper>
        <Button
          type="button"
          onClick={handleClick}
        >
          <img src="/images/fastfood.png" alt="order button" />
          <span>매장 주문</span>
        </Button>
        <Button
          type="button"
          onClick={handleClick}
        >
          <img src="/images/bag.png" alt="to go button" />
          <span>전체 포장</span>
        </Button>
      </Wrapper>
    </Container>
  );
}
