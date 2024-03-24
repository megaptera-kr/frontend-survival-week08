import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  padding-block: 10em 25em;
`;

const Title = styled.h2`
  font-size: 110px;
  font-weight: bold;
  line-height: 140px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin-bottom: 1em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 2em;
`;

const Button = styled.button`
  font-size: 48px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2.5em;
  width: 49%;
  border: 1px solid transparent;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.background02};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.buttonHover};
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
  return (
    <Container>
      <Title>원하시는 주문을 터치해주세요</Title>
      <Link to="/order" style={{ textDecoration: 'none' }}>
        <Wrapper>
          <Button type="button">
            <img src="/images/fastfood.png" alt="fastfood" />
            <span>매장 주문</span>
          </Button>
          <Button type="button">
            <img src="/images/bag.png" alt="bag" />
            <span>전체 포장</span>
          </Button>
        </Wrapper>
      </Link>
    </Container>
  );
}
