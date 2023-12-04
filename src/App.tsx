import { ThemeProvider } from 'styled-components';

import { useDarkMode } from 'usehooks-ts';

import AppRoutes from './routes';

import defaultTheme from '../styles/defaultTheme';

import darkTheme from '../styles/darkTheme';
import GlobalStyles from '../styles/GlobalStyles';

export default function App() {
  const { isDarkMode } = useDarkMode();

  const theme = !isDarkMode ? defaultTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}
