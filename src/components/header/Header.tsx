import styled from 'styled-components';
import DarkModeButtons from './DarkModeButtons';
import Logo from './Logo';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

function Header({ toggleDarkMode } : {toggleDarkMode: () => void}) {
  return (
    <HeaderDiv>
      <Logo />
      <DarkModeButtons toggleDarkMode={toggleDarkMode} />
    </HeaderDiv>
  );
}

export default Header;
