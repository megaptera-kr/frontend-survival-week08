// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';

export default function renderWithThemeProvider(node:ReactNode) {
  const theme = defaultTheme;
  return render(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
}
