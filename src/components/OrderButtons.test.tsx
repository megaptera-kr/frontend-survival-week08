/* eslint-disable comma-dangle */
import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { ThemeProvider } from 'styled-components';

import OrderButtons from './OrderButtons';

import defaultTheme from '../theme/defaultTheme';

describe('OrderButtons', () => {
  const theme = defaultTheme;

  it('renders button', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <OrderButtons />
        </MemoryRouter>
      </ThemeProvider>
    );
    screen.getByText('매장 주문');
    screen.getByText('전체 포장');
  });
});
