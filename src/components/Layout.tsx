import { Outlet } from 'react-router';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import Header from './header/Header';

import defaultTheme from '../theme/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

import MainStyle from '../styles/MainStyle';

export default function Layout() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <MainStyle>
        <Header />
        <Outlet />
      </MainStyle>
    </ThemeProvider>
  );
}
