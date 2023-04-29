import React from 'react';
import { Outlet } from 'react-router-dom';
import { Reset } from 'styled-reset';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import GlobalStyle from '../styles/GlobalStyle';
import { defaultTheme } from '../styles/defaultTheme';
import darkTheme from '../styles/darkTheme';

const StyledContainer = styled.div`
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background};
`;

function Layout() {
  const { isDarkMode } = useDarkMode(false);
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default Layout;
