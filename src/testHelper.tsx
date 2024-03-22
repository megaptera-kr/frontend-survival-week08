/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { render } from '@testing-library/react';

import { ReactNode } from 'react';

import { MemoryRouter } from 'react-router';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './theme/defaultTheme';

type Option = {
  path?: string;
};

const theme = defaultTheme;

export function renderWithProviders(
  node: ReactNode,
  { path = '/' }: Option = {}
) {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>{node}</MemoryRouter>
    </ThemeProvider>
  );
}
