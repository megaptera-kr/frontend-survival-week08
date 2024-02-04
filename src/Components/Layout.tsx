import { Outlet } from 'react-router';

import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './Header';

import useDarkMode from '../hooks/useDarkMode';

import darkTheme from '../styles/darkTheme';
import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

const StyledContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background};
`;

export default function Layout() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      <StyledContainer>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Outlet />
        </main>
      </StyledContainer>
    </ThemeProvider>
  );
}
