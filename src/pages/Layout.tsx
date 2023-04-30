import { Outlet } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import Header from '../components/header/Header';
import darkTheme from '../style/darkTheme';
import defaultTheme from '../style/defaultTheme';

const StyledHtml = styled.div`
  background: ${(props) => props.theme.colors.outerBackground};
`;

const StyledBody = styled.div`
  position: relative;
  width: 1080px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background};
`;

export default function Layout() {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <StyledHtml>
        <StyledBody>
          <Header toggleDarkMode={toggleDarkMode} />
          <Outlet />
        </StyledBody>
      </StyledHtml>
    </ThemeProvider>

  );
}
