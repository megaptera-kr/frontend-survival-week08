import { Outlet } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';
import styled from 'styled-components';
import Header from './common/header/Header';

const StyledLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 60px 0 0;
  max-width: 1080px;
  background: ${(props) => props.theme.colors.backgroundWrap};
  color: ${(props) => props.theme.colors.text};
`;

export default function Layout() {
  const {
    isDarkMode, toggle,
  } = useDarkMode();
  return (
    <StyledLayoutContainer>
      <Header
        isDarkMode={isDarkMode}
        toggle={toggle}
      />
      <main>
        <Outlet />
      </main>
    </StyledLayoutContainer>
  );
}
