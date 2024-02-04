import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './useDarkMode';
import darkTheme from '../styles/darkTheme';
import defaultTheme from '../styles/defaultTheme';

function TestProvider({ children }:{children :React.ReactNode}) {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default TestProvider;
