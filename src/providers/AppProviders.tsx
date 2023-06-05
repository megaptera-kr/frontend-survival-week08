import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import darkTheme from '../styles/darkTheme';
import defaultTheme from '../styles/defaultTheme';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
