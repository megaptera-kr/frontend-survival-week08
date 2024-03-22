/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';

import defaultTheme from '../theme/defaultTheme';
import darkTheme from '../theme/darkTheme';

type ThemProviderProps = {
  children: ReactNode;
};

const defaultValue = {
  theme: 'light',
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

function ThemeProvider({ children }: ThemProviderProps) {
  const themeProps = useTheme();
  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider
        theme={themeProps.theme === 'light' ? defaultTheme : darkTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
