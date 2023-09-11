// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import { ReactNode } from 'react';

import { MemoryRouter as Router } from 'react-router';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';

type Option = {
  path?: string;
}

export default function renderWithProviders(
  node: ReactNode,
  { path = '/' }: Option = {},
) {
  return render((
    <Router initialEntries={[path]}>
      <ThemeProvider theme={defaultTheme}>
        {node}
      </ThemeProvider>
    </Router>
  ));
}
