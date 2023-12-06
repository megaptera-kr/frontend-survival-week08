import styled from 'styled-components';
import Switch from './Switch';

const StyledHeader = styled.header`
    font-family: 'yg-jalnan';
    font-size: 48px;
    color: ${(props) => props.theme.colors.text};;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }

    div {
      display: flex;
      align-items: center;
    }

`;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <img src="/images/logo.png" alt="logo" />
        메가테라 푸드코트 키오스크
      </div>
      <Switch />
    </StyledHeader>
  );
}
