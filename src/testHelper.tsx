/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { render } from '@testing-library/react';

import { ReactNode } from 'react';

import { MemoryRouter } from 'react-router';

import ThemeProvider from './context/ThemeProvider';

type Option = {
  path?: string;
};

export function renderWithProviders(
  node: ReactNode,
  { path = '/' }: Option = {}
) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>{node}</MemoryRouter>
    </ThemeProvider>
  );
}
