/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useMemo } from 'react';
import { useDarkMode } from 'usehooks-ts';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import darkTheme from '../styles/darkTheme';
import { defaultTheme } from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

type StyleContextProps = {
  isDarkMode: boolean
  toggle: () => void
}
export const StyleContext = createContext<StyleContextProps>({
  isDarkMode: false,
  toggle: () => {},
});

type StyleProviderProps ={
  children: ReactNode
}

export function StyleProvider({ children }: StyleProviderProps) {
  const { isDarkMode, toggle } = useDarkMode(false);
  const theme = isDarkMode ? darkTheme : defaultTheme;

  const value = useMemo(() => ({ isDarkMode, toggle }), [isDarkMode]);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyleContext.Provider value={value}>
          {children}
        </StyleContext.Provider>
      </ThemeProvider>
    </>
  );
}
