import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useThemeStore from './hooks/useThmeStore';
import Header from './components/common/Header/Header';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

export default function App() {
  const routes = createBrowserRouter(Routes);
  const [{ isDarkMode }, store] = useThemeStore();
  const theme = !isDarkMode ? defaultTheme : darkTheme;

  const handleToggleTheme = () => {
    store.toggleTheme();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $isDarkMode={isDarkMode} />
      <Header
        isDarkMode={isDarkMode}
        handleToggleTheme={handleToggleTheme}
      />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
