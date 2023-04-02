import styled from 'styled-components';
import ToggleBtn from './ToggleBtn';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    height: 80px;
    cursor: pointer;
  }
  h2 {
    margin-left: 20px;
    font-size: 4.8rem;
    font-family: 'Jalnan';
    color: white;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Box>
        <img src="/images/logo.png" alt="logo" />
        <h2>메가테라 푸드코트 키오스크</h2>
      </Box>
      <ToggleBtn />
    </HeaderContainer>
  );
}

export default Header;
