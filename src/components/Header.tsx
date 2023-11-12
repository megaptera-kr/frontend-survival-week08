import styled from 'styled-components';
import Switch from './Switch';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes.contentPadding};
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 4.8rem;
    font-weight: bold;
    padding: .3em;
    color: #FFFFFF;
    line-height: 106%
  }

  img {
    display: block;
    width: 68px;
    height: 60px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        <img src="/images/logo.png" alt="logo" />
        <h1>메가테라 푸드코트 키오스크</h1>
      </Title>
      <Switch />
    </HeaderContainer>
  );
}
