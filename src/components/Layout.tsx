import { Outlet } from 'react-router';

import { useDarkMode } from 'usehooks-ts';

import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import defaultTheme from '../styles/defaultTheme';
import darkTheme from '../styles/darkTheme';

import Header from './Header';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.mainBackground};
  width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export default function Layout() {
  const { isDarkMode, toggle } = useDarkMode(false);

  const theme = !isDarkMode ? defaultTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header isDarkMode={isDarkMode} setIsDarkMode={toggle} />
        <main>
          <Outlet />
        </main>
      </Wrapper>
    </ThemeProvider>
  );
}
