import { Outlet } from 'react-router';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import Header from './header/Header';

import defaultTheme from '../theme/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

import Main from '../styles/Main';

function Layout() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Main>
        <Header />
        <Outlet />
      </Main>
    </ThemeProvider>
  );
}

export default Layout;
