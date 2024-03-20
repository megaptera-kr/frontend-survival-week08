import { Outlet } from 'react-router';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const theme = defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
