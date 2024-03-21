import { Outlet } from 'react-router';

import { useDarkMode } from 'usehooks-ts';

import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import defaultTheme from '../styles/defaultTheme';

import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 1080px;
  margin: auto;
`;

export default function Layout() {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header isDarkMode={isDarkMode} setIsDarkMode={toggle} />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </Wrapper>
    </ThemeProvider>
  );
}
