import { ThemeProvider } from 'styled-components';

import { useDarkMode } from 'usehooks-ts';

import { Provider } from 'react-redux';
import AppRoutes from './routes';

import defaultTheme from './theme/defaultTheme';

import darkTheme from './theme/darkTheme';

import GlobalStyles from './theme/GlobalStyles';
import { store } from './store';

export default function App() {
  const { isDarkMode } = useDarkMode();

  const theme = !isDarkMode ? defaultTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
}
