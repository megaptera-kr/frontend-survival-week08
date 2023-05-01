import { MemoryRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { lightTheme, darkTheme } from '../styles';

export const withRouter = (routes: React.ReactElement, initialEntries = '/') => (
  <MemoryRouter initialEntries={[initialEntries]}>
    <Routes>
      {routes}
    </Routes>
  </MemoryRouter>
);

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

export const withAllContexts = (children: React.ReactElement, themeType: 'light' | 'dark' = 'light') => {
  const theme = themeType === 'light' ? lightTheme : darkTheme;
  const testClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testClient}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};
