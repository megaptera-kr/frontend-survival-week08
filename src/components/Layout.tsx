/* eslint-disable react/jsx-no-undef */
import { Outlet } from 'react-router';

import { Reset } from 'styled-reset';

import Header from './header/Header';

import GlobalStyle from '../styles/GlobalStyle';

import MainStyle from '../styles/MainStyle';

import ThemeProvider from '../context/ThemeProvider';

export default function Layout() {
  return (
    <ThemeProvider>
      <Reset />
      <GlobalStyle />
      <MainStyle>
        <Header />
        <Outlet />
      </MainStyle>
    </ThemeProvider>
  );
}
