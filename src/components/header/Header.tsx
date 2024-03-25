import styled from 'styled-components';

import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

const HeaderWrapStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
`;

function Header() {
  return (
    <HeaderWrapStyle>
      <Logo />
      <ThemeSwitch />
    </HeaderWrapStyle>
  );
}

export default Header;
