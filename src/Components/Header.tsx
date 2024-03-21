import styled from 'styled-components';

import LogoContent from './LogoContent';
import ThemeSwitch from './ThemeSwitch';

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
`;

function Header() {
  return (
    <HeaderWrap>
      <LogoContent />
      <ThemeSwitch />
    </HeaderWrap>
  );
}

export default Header;
