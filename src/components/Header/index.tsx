import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';

const StyledHeader = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px;
`;

const StyledHeaderLeft = styled.div`
  display:flex;
  align-items: center;
  column-gap:20px;
`;

const StyledHeaderTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.Jalnan};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size:${(props) => props.theme.fontSize.xl};
  color:${(props) => props.theme.colors.title};
`;

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <img src="images/logo.png" alt="logo" width={80} />
        <StyledHeaderTitle>메가테라 푸드코트 키오스크</StyledHeaderTitle>
      </StyledHeaderLeft>
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
