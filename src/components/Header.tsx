import styled from 'styled-components';
import Switch from './Switch';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 3rem 0;
`;

const Title = styled.div`
  display: flex;

  h1 {
    font-size: 4.8rem;
    font-weight: bold;
    padding-inline: .3em;
    line-height: 150%;
    color: ${(props) => props.theme.colors.white};
  }

  img {
    display: block;
    width: 68px;
    height: 60px;
  }
`;

export default function Header() {
  return (
    <Container>
      <Title>
        <img src="/images/logo.png" alt="logo" />
        <h1>메가테라 푸드코트 키오스크</h1>
      </Title>

      <Switch />
    </Container>
  );
}
