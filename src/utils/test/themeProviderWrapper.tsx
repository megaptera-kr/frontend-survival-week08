import React, { ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '../../styles/defaultTheme';

const theme = DefaultTheme;
function themeProvidersWrapper({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: themeProvidersWrapper, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

export { customRender as render };
