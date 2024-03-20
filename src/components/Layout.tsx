import { Outlet } from 'react-router';

import { Reset } from 'styled-reset';

import GlobalStyle from '../styles/GlobalStyle';

import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
