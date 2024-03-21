import { Outlet } from 'react-router';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import Header from './header/Header';

import defaultTheme from '../theme/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

function Layout() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default Layout;
