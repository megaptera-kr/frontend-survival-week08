import styled from 'styled-components';
import Switch from './Switch';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1.5rem;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.sizes.contentPadding};

  h1 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 4.8rem;
    font-weight: 700;
    font-family: 'Ansungtangmyun-ESG';
  }

  img {
    display: block;
    width: 68px;
    height: 68px;
    margin-right: 2rem;
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
