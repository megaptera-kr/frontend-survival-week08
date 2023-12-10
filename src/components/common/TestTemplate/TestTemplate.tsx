import { ThemeProvider } from 'styled-components';
import darkTheme from '../../../styles/darkTheme';
import defaultTheme from '../../../styles/defaultTheme';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function TestTemplate({ children }: Props) {
  const isDarkMode = false;
  const theme = !isDarkMode ? defaultTheme : darkTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default TestTemplate;
